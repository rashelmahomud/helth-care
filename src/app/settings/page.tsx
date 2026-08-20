"use client";

import { FileBadge, FileExclamationPoint, FileLock, FileMinusCornerIcon, FileScan, FileSignalIcon, FileSignatureIcon, FileUser, FishSymbolIcon } from "lucide-react";
import { useState } from "react";


type TabType = "general" | "appearance" | "notifications" | "security";

export default function WebsiteSettings() {

    const [activeTab, setActiveTab] = useState<TabType>("general");
    const [isSaved, setIsSaved] = useState<boolean>(false);

    // Form states
    const [siteName, setSiteName] = useState<string>("My Awesome App");
    const [siteUrl, setSiteUrl] = useState<string>("https://example.com");
    const [theme, setTheme] = useState<string>("system");
    const [emailAlerts, setEmailAlerts] = useState<boolean>(true);
    const [pushAlerts, setPushAlerts] = useState<boolean>(false);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);
    };


    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
            {/* Sidebar Navigation */}
            <aside className="w-full md:w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white">
                            S
                        </div>
                        <h1 className="text-xl font-bold tracking-tight">Settings</h1>
                    </div>

                    <nav className="space-y-1">
                        <button
                            onClick={() => setActiveTab("general")}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === "general"
                                ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20"
                                : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                                }`}
                        >
                            <FileUser className="text-lg" />
                            General
                        </button>

                        <button
                            onClick={() => setActiveTab("appearance")}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === "appearance"
                                ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20"
                                : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                                }`}
                        >
                            <FileMinusCornerIcon className="text-lg" />
                            Appearance
                        </button>

                        <button
                            onClick={() => setActiveTab("notifications")}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === "notifications"
                                ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20"
                                : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                                }`}
                        >
                            <FileBadge className="text-lg" />
                            Notifications
                        </button>

                        <button
                            onClick={() => setActiveTab("security")}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === "security"
                                ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20"
                                : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                                }`}
                        >
                            <FileLock className="text-lg" />
                            Security
                        </button>
                    </nav>
                </div>

                <div className="pt-6 border-t border-slate-800 text-xs text-slate-500">
                    Workspace v2.4.0
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-6 md:p-10 max-w-4xl">
                <header className="flex justify-between items-center mb-8 pb-6 border-b border-slate-800">
                    <div>
                        <h2 className="text-2xl font-semibold capitalize">{activeTab} Settings</h2>
                        <p className="text-sm text-slate-400 mt-1">
                            Manage your website preferences and configuration options.
                        </p>
                    </div>

                    {isSaved && (
                        <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-lg animate-pulse">
                            Changes saved successfully!
                        </span>
                    )}
                </header>

                <form onSubmit={handleSave} className="space-y-6">
                    {/* GENERAL TAB CONTENT */}
                    {activeTab === "general" && (
                        <div className="space-y-6 animate-fadeIn">
                            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                                <h3 className="text-lg font-medium">Site Identity</h3>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Site Name
                                    </label>
                                    <input
                                        type="text"
                                        value={siteName}
                                        onChange={(e) => setSiteName(e.target.value)}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Site URL
                                    </label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-500 pointer-events-none">
                                            <FileSignalIcon />
                                        </span>
                                        <input
                                            type="url"
                                            value={siteUrl}
                                            onChange={(e) => setSiteUrl(e.target.value)}
                                            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-2.5 text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* APPEARANCE TAB CONTENT */}
                    {activeTab === "appearance" && (
                        <div className="space-y-6 animate-fadeIn">
                            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                                <h3 className="text-lg font-medium">Theme Preference</h3>
                                <p className="text-sm text-slate-400">Select how the interface appears to you.</p>

                                <div className="grid grid-cols-3 gap-4 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setTheme("light")}
                                        className={`flex flex-col items-center justify-center p-4 rounded-xl border text-sm font-medium transition-all ${theme === "light"
                                            ? "border-indigo-500 bg-indigo-600/10 text-indigo-400"
                                            : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"
                                            }`}
                                    >
                                        <FileSignatureIcon className="text-xl mb-2" />
                                        Light
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setTheme("dark")}
                                        className={`flex flex-col items-center justify-center p-4 rounded-xl border text-sm font-medium transition-all ${theme === "dark"
                                            ? "border-indigo-500 bg-indigo-600/10 text-indigo-400"
                                            : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"
                                            }`}
                                    >
                                        <FishSymbolIcon className="text-xl mb-2" />
                                        Dark
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setTheme("system")}
                                        className={`flex flex-col items-center justify-center p-4 rounded-xl border text-sm font-medium transition-all ${theme === "system"
                                            ? "border-indigo-500 bg-indigo-600/10 text-indigo-400"
                                            : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"
                                            }`}
                                    >
                                        <FileExclamationPoint className="text-xl mb-2" />
                                        System
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* NOTIFICATIONS TAB CONTENT */}
                    {activeTab === "notifications" && (
                        <div className="space-y-6 animate-fadeIn">
                            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
                                <h3 className="text-lg font-medium">Alert Channels</h3>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-sm font-medium text-slate-200">Email Notifications</h4>
                                        <p className="text-xs text-slate-400">Receive weekly updates and alerts via email.</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={emailAlerts}
                                        onChange={(e) => setEmailAlerts(e.target.checked)}
                                        className="h-5 w-5 accent-indigo-600 rounded bg-slate-950 border-slate-800 cursor-pointer"
                                    />
                                </div>

                                <div className="border-t border-slate-800 pt-4 flex items-center justify-between">
                                    <div>
                                        <h4 className="text-sm font-medium text-slate-200">Push Notifications</h4>
                                        <p className="text-xs text-slate-400">Get push notifications directly in your browser.</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={pushAlerts}
                                        onChange={(e) => setPushAlerts(e.target.checked)}
                                        className="h-5 w-5 accent-indigo-600 rounded bg-slate-950 border-slate-800 cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* SECURITY TAB CONTENT */}
                    {activeTab === "security" && (
                        <div className="space-y-6 animate-fadeIn">
                            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                                <h3 className="text-lg font-medium">Change Password</h3>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">Current Password</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">New Password</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Form Action Footer */}
                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-xl font-medium transition-colors shadow-lg shadow-indigo-600/20 cursor-pointer"
                        >
                            <FileScan />
                            Save Changes
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}