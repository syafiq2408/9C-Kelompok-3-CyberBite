import React, { useState, useEffect } from 'react';
import { FileText, Plus, ExternalLink, RefreshCw, LogOut, CheckCircle, AlertCircle, Loader2, Sparkles, BookOpen, Send, Lock } from 'lucide-react';
import { googleSignIn, initAuth, getAccessToken, logout } from '../utils/googleAuth';
import { User } from 'firebase/auth';

interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  modifiedTime?: string;
  webViewLink?: string;
}

interface DocContent {
  title: string;
  body?: {
    content?: Array<{
      paragraph?: {
        elements?: Array<{
          textRun?: {
            content?: string;
          };
        }>;
      };
    }>;
  };
}

export const DocsSection: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [needsAuth, setNeedsAuth] = useState<boolean>(true);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [loadingFiles, setLoadingFiles] = useState<boolean>(false);
  const [files, setFiles] = useState<DriveFile[]>([]);
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
  const [docDetails, setDocDetails] = useState<DocContent | null>(null);
  const [loadingDoc, setLoadingDoc] = useState<boolean>(false);
  const [creatingTemplate, setCreatingTemplate] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  // Append text modal state
  const [isAppendModalOpen, setIsAppendModalOpen] = useState<boolean>(false);
  const [appendText, setAppendText] = useState<string>('');
  const [isAppending, setIsAppending] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = initAuth(
      async (authUser, authToken) => {
        setUser(authUser);
        setToken(authToken);
        setNeedsAuth(false);
        fetchDriveDocs(authToken);
      },
      () => {
        setUser(null);
        setToken(null);
        setNeedsAuth(true);
        setFiles([]);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    setErrorMessage(null);
    try {
      const result = await googleSignIn();
      if (result) {
        setUser(result.user);
        setToken(result.accessToken);
        setNeedsAuth(false);
        fetchDriveDocs(result.accessToken);
        setSuccessMessage('Successfully connected to Google Workspace & Docs!');
        setTimeout(() => setSuccessMessage(null), 4000);
      }
    } catch (err: any) {
      console.error('Login error:', err);
      setErrorMessage(err.message || 'Failed to sign in with Google');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
    setToken(null);
    setNeedsAuth(true);
    setFiles([]);
    setSelectedDocId(null);
    setDocDetails(null);
  };

  const fetchDriveDocs = async (accessToken: string) => {
    setLoadingFiles(true);
    setErrorMessage(null);
    try {
      const query = encodeURIComponent("mimeType = 'application/vnd.google-apps.document'");
      const res = await fetch(`https://www.googleapis.com/drive/v3/files?q=${query}&orderBy=modifiedTime desc&pageSize=20`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!res.ok) {
        throw new Error('Failed to fetch Google Docs from Drive');
      }
      const data = await res.json();
      setFiles(data.files || []);
    } catch (err: any) {
      console.error('Error fetching docs:', err);
      setErrorMessage(err.message);
    } finally {
      setLoadingFiles(false);
    }
  };

  const fetchDocDetails = async (docId: string) => {
    setSelectedDocId(docId);
    setLoadingDoc(true);
    setErrorMessage(null);
    try {
      const currentToken = await getAccessToken();
      if (!currentToken) throw new Error('No access token available');

      const res = await fetch(`https://docs.googleapis.com/v1/documents/${docId}`, {
        headers: { Authorization: `Bearer ${currentToken}` },
      });
      if (!res.ok) throw new Error('Failed to load document content');
      const data = await res.json();
      setDocDetails(data);
    } catch (err: any) {
      console.error('Error loading document:', err);
      setErrorMessage(err.message);
    } finally {
      setLoadingDoc(false);
    }
  };

  const createSmartCafeDoc = async (templateName: string, initialContent: string) => {
    setCreatingTemplate(templateName);
    setErrorMessage(null);
    try {
      const currentToken = await getAccessToken();
      if (!currentToken) throw new Error('No access token available');

      // 1. Create empty doc
      const createRes = await fetch('https://docs.googleapis.com/v1/documents', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${currentToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: templateName }),
      });

      if (!createRes.ok) throw new Error('Failed to create new Google Doc');
      const newDoc = await createRes.json();
      const docId = newDoc.documentId;

      // 2. Insert initial text with batchUpdate
      const updateRes = await fetch(`https://docs.googleapis.com/v1/documents/${docId}:batchUpdate`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${currentToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          requests: [
            {
              insertText: {
                text: initialContent,
                location: { index: 1 },
              },
            },
          ],
        }),
      });

      if (!updateRes.ok) throw new Error('Failed to insert initial content');

      setSuccessMessage(`Successfully created Google Doc: "${templateName}"!`);
      setTimeout(() => setSuccessMessage(null), 5000);
      fetchDriveDocs(currentToken);
      fetchDocDetails(docId);
    } catch (err: any) {
      console.error('Error creating doc template:', err);
      setErrorMessage(err.message);
    } finally {
      setCreatingTemplate(null);
    }
  };

  const handleAppendTextConfirm = async () => {
    if (!selectedDocId || !appendText.trim()) return;

    // MANDATORY USER CONFIRMATION REQUIREMENT FOR MUTATING OPERATIONS
    const confirmed = window.confirm(
      `Are you sure you want to append new text to this Google Document? This will modify the document in your Google Drive.`
    );
    if (!confirmed) return;

    setIsAppending(true);
    setErrorMessage(null);
    try {
      const currentToken = await getAccessToken();
      if (!currentToken) throw new Error('No access token available');

      const res = await fetch(`https://docs.googleapis.com/v1/documents/${selectedDocId}:batchUpdate`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${currentToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          requests: [
            {
              insertText: {
                text: `\n\n[Grade 9 Student Update / Reflection]:\n${appendText}`,
                location: { index: 1 }, // or end of doc
              },
            },
          ],
        }),
      });

      if (!res.ok) throw new Error('Failed to update document content');

      setSuccessMessage('Successfully updated Google Document!');
      setTimeout(() => setSuccessMessage(null), 4000);
      setAppendText('');
      setIsAppendModalOpen(false);
      fetchDocDetails(selectedDocId);
    } catch (err: any) {
      console.error('Error updating document:', err);
      setErrorMessage(err.message);
    } finally {
      setIsAppending(false);
    }
  };

  // Helper to extract plain text from Google Docs structural elements
  const renderDocPlainText = (contentObj?: DocContent | null) => {
    if (!contentObj?.body?.content) return 'No content loaded.';
    let text = '';
    for (const element of contentObj.body.content) {
      if (element.paragraph?.elements) {
        for (const el of element.paragraph.elements) {
          if (el.textRun?.content) {
            text += el.textRun.content;
          }
        }
      }
    }
    return text || 'Document is currently empty.';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header banner */}
      <div className="bg-gradient-to-r from-[#eef3ee] via-[#e4ece4] to-[#f2f7f3] rounded-3xl p-8 border border-[#d3e2d5] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d6e5d8] text-[#2c4434] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#42594a]" />
            <span>Google Workspace Integration</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            CyberBite Google Docs Hub
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Create, export, and sync your Grade 9 Report Text, Business Pitch, and Smart Cafe IoT architecture specifications directly with your Google Docs cloud storage.
          </p>
        </div>

        {/* Auth status / button */}
        <div className="shrink-0 flex flex-col items-center sm:items-end gap-3">
          {needsAuth ? (
            <button
              onClick={handleLogin}
              disabled={isLoggingIn}
              className="gsi-material-button flex items-center gap-3 px-6 py-3 rounded-2xl bg-white hover:bg-stone-50 border border-stone-300 shadow-sm transition-all font-medium text-stone-700 text-sm cursor-pointer disabled:opacity-60"
            >
              <div className="gsi-material-button-icon w-5 h-5 flex items-center justify-center">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                </svg>
              </div>
              <span>{isLoggingIn ? 'Connecting to Google...' : 'Sign in with Google'}</span>
            </button>
          ) : (
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-2xl border border-stone-200 shadow-xs">
              <div className="w-8 h-8 rounded-full bg-[#98ab9d] text-white font-bold flex items-center justify-center text-xs">
                {user?.email?.charAt(0).toUpperCase() || 'U'}
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-stone-800">{user?.displayName || user?.email}</div>
                <div className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Connected to Google Docs
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="ml-2 p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-xl transition-colors"
                title="Sign out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Success / Error alerts */}
      {successMessage && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-2xl text-sm flex items-center gap-3 shadow-xs">
          <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}
      {errorMessage && (
        <div className="bg-rose-50 border border-rose-200 text-rose-800 px-4 py-3 rounded-2xl text-sm flex items-center gap-3 shadow-xs">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {needsAuth ? (
        <div className="bg-white rounded-3xl p-12 border border-stone-200 shadow-sm text-center max-w-xl mx-auto space-y-6">
          <div className="w-16 h-16 bg-[#eef3ee] text-[#42594a] rounded-2xl flex items-center justify-center mx-auto shadow-inner">
            <Lock className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-stone-900">Google Docs Access Required</h2>
            <p className="text-stone-600 text-sm">
              Please sign in with your Google account to browse, create, and edit CyberBite Smart Cafe documents directly in Google Docs with full permission.
            </p>
          </div>
          <button
            onClick={handleLogin}
            disabled={isLoggingIn}
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl bg-[#42594a] hover:bg-[#34483a] text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
          >
            {isLoggingIn ? <Loader2 className="w-4 h-4 animate-spin" /> : <FileText className="w-4 h-4" />}
            <span>Sign in with Google & Open Hub</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1 & 2: Templates & Document List */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Templates Card */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                  <Plus className="w-5 h-5 text-[#5f7d69]" />
                  <span>Create Project Doc</span>
                </h3>
              </div>
              <p className="text-xs text-stone-500">
                Click any template to instantly generate a professional Google Document in your Drive:
              </p>

              <div className="space-y-2.5">
                {[
                  {
                    title: 'CyberBite Grade 9 Report Text (English & STEM)',
                    desc: 'Formal academic report structure with introduction, description, and conclusion.',
                    initialText: 'CYBERBITE SMART CAFE: GRADE 9 ENGLISH & STEM REPORT TEXT PROJECT\n\n1. INTRODUCTION\nCyberBite Smart Cafe is an innovative Internet of Things (IoT) and Artificial Intelligence concept designed for modern high school students.\n\n2. TECHNICAL DESCRIPTION\nFeaturing automated robotic baristas, smart temperature zones, and nutritional analytics displays.\n\n3. CONCLUSION\nThis project successfully merges engineering with practical culinary arts.'
                  },
                  {
                    title: 'CyberBite Business Plan & Financial Model',
                    desc: 'Startup capital, cost projections, pricing strategy, and marketing plan.',
                    initialText: 'CYBERBITE SMART CAFE: BUSINESS PLAN & FINANCIAL MODEL\n\n- Capital Investment: IDR 75,000,000\n- Target Market: High school students, teachers, and study groups\n- Revenue Streams: Smart beverage subscriptions, IoT snack vending, and study booth rentals.'
                  },
                  {
                    title: 'IoT & AI Architecture Technical Specification',
                    desc: 'Sensor arrays, microcontroller specs, cloud database, and API routing.',
                    initialText: 'CYBERBITE IOT ARCHITECTURE SPECIFICATION\n\n- Microcontrollers: ESP32 Wi-Fi/Bluetooth modules\n- Sensors: DHT22 Temperature & Humidity, IR Obstacle Detection, Load Cells\n- Backend: Firebase Firestore & Google Cloud Run.'
                  }
                ].map((tpl, idx) => (
                  <button
                    key={idx}
                    onClick={() => createSmartCafeDoc(tpl.title, tpl.initialText)}
                    disabled={creatingTemplate !== null}
                    className="w-full text-left p-3.5 rounded-2xl bg-[#faf7f2] hover:bg-[#f0ede6] border border-stone-200 transition-all group flex flex-col gap-1 cursor-pointer disabled:opacity-50"
                  >
                    <div className="text-xs font-bold text-stone-800 group-hover:text-[#42594a] flex items-center justify-between">
                      <span>{tpl.title}</span>
                      {creatingTemplate === tpl.title ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-[#42594a]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#42594a]" />
                      )}
                    </div>
                    <div className="text-[11px] text-stone-500 leading-tight">{tpl.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* My Google Docs List */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#5f7d69]" />
                  <span>My Google Docs</span>
                </h3>
                <button
                  onClick={() => token && fetchDriveDocs(token)}
                  disabled={loadingFiles}
                  className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-xl transition-colors"
                  title="Refresh files"
                >
                  <RefreshCw className={`w-4 h-4 ${loadingFiles ? 'animate-spin' : ''}`} />
                </button>
              </div>

              {loadingFiles ? (
                <div className="py-12 text-center text-stone-400 flex flex-col items-center gap-2">
                  <Loader2 className="w-6 h-6 animate-spin text-[#5f7d69]" />
                  <span className="text-xs">Loading documents from Google Drive...</span>
                </div>
              ) : files.length === 0 ? (
                <div className="py-8 text-center text-stone-400 text-xs">
                  No Google Docs found in your Drive. Click a template above to create one!
                </div>
              ) : (
                <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
                  {files.map((file) => {
                    const isSelected = selectedDocId === file.id;
                    return (
                      <div
                        key={file.id}
                        onClick={() => fetchDocDetails(file.id)}
                        className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          isSelected
                            ? 'bg-[#e2ebe3] border-[#b8ccbc] shadow-xs'
                            : 'bg-stone-50/60 hover:bg-stone-100 border-stone-200/70'
                        }`}
                      >
                        <div className="min-w-0 flex-1">
                          <div className={`text-xs font-bold truncate ${isSelected ? 'text-[#2c4434]' : 'text-stone-800'}`}>
                            {file.name}
                          </div>
                          <div className="text-[10px] text-stone-500">
                            {file.modifiedTime ? new Date(file.modifiedTime).toLocaleDateString() : 'Google Doc'}
                          </div>
                        </div>
                        <a
                          href={`https://docs.google.com/document/d/${file.id}/edit`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 text-stone-400 hover:text-stone-700 hover:bg-white rounded-xl transition-colors"
                          title="Open in Google Docs"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Column 3: Document Content & Editor Viewer */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm flex flex-col h-[640px]">
              {selectedDocId ? (
                <div className="flex flex-col h-full space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                    <div>
                      <div className="text-xs font-bold text-[#5f7d69] uppercase tracking-wider">Active Document</div>
                      <h2 className="text-xl font-extrabold text-stone-900 truncate max-w-md">
                        {docDetails?.title || 'Loading document...'}
                      </h2>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsAppendModalOpen(true)}
                        className="px-3.5 py-2 rounded-xl bg-[#42594a] hover:bg-[#34483a] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Reflection / Note</span>
                      </button>
                      <a
                        href={`https://docs.google.com/document/d/${selectedDocId}/edit`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold flex items-center gap-1.5 transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Open in Google Docs</span>
                      </a>
                    </div>
                  </div>

                  {loadingDoc ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-stone-400 gap-2">
                      <Loader2 className="w-8 h-8 animate-spin text-[#5f7d69]" />
                      <span className="text-sm">Fetching document content from Google Docs API...</span>
                    </div>
                  ) : (
                    <div className="flex-1 bg-[#faf7f2] rounded-2xl p-6 border border-stone-200 overflow-y-auto font-mono text-xs sm:text-sm text-stone-800 whitespace-pre-wrap leading-relaxed shadow-inner">
                      {renderDocPlainText(docDetails)}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center text-stone-400 space-y-3">
                  <div className="w-16 h-16 bg-[#faf7f2] text-[#98ab9d] rounded-2xl flex items-center justify-center shadow-inner">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <div className="space-y-1 max-w-sm">
                    <h3 className="text-lg font-bold text-stone-800">No Document Selected</h3>
                    <p className="text-xs text-stone-500">
                      Select an existing document from your list on the left or create a new template to view and edit its content here.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Append Text / Note Modal with mandatory user confirmation flow */}
      {isAppendModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-stone-200 space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-stone-900">Add Note to Google Doc</h3>
              <p className="text-xs text-stone-500">
                Type your Grade 9 project reflection or team update below. This will append text to your Google Document with user confirmation.
              </p>
            </div>

            <textarea
              rows={4}
              value={appendText}
              onChange={(e) => setAppendText(e.target.value)}
              placeholder="e.g., Team tested the automated IoT sensor successfully with 99.4% accuracy..."
              className="w-full rounded-2xl border border-stone-300 p-4 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#42594a] resize-none"
            />

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setIsAppendModalOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAppendTextConfirm}
                disabled={isAppending || !appendText.trim()}
                className="px-5 py-2.5 rounded-xl bg-[#42594a] hover:bg-[#34483a] text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all disabled:opacity-50 cursor-pointer"
              >
                {isAppending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                <span>Confirm & Update Doc</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
