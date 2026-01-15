<div className="flex-1 flex flex-col h-full min-w-0 bg-white">
                {selectedCustomerId ? (() => {
                    const selectedCustomer = customers.find(c => c.id === selectedCustomerId)
                    const displayName = selectedCustomer?.username || `Customer #${selectedCustomerId}`
                    const agentName = selectedCustomer?.agent_name || 'Unassigned'
                    const avatarInitial = selectedCustomer?.username?.charAt(0).toUpperCase() || '#'
                    return (
                        <div className="flex flex-col h-full bg-slate-50 relative">
                            {/* Header */}
                            <div className="px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-indigo-50 to-purple-50 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-md">
                                        {avatarInitial}
                                    </div>
                                    <div className="font-bold text-slate-800 leading-tight">
                                        {displayName} [{selectedCustomerId}]
                                    </div>
                                </div>
                                <div>
                                    <span className="inline-block px-3 py-2 rounded-lg bg-emerald-600 text-xs text-white">
                                        {agentName}
                                    </span>
                                </div>
                            </div>

                            {/* Error Banner */}
                            {error && (
                                <div className="px-6 py-2 bg-red-50 border-b border-red-100">
                                    <p className="text-sm text-red-600">{error}</p>
                                </div>
                            )}

                            {/* Messages */}
                            <div
                                className="flex-1 overflow-y-auto p-6 bg-slate-50 scroll-smooth"
                                style={{ scrollbarWidth: 'thin' }}
                            >
                                <div className="max-w-4xl mx-auto">
                                    {messages.length === 0 && (
                                        <div className="flex flex-col items-center justify-center h-64 text-center">
                                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                                                <Smile size={32} className="text-slate-300" />
                                            </div>
                                            <p className="text-slate-500 font-medium">No messages yet</p>
                                            <p className="text-sm text-slate-400">Start the conversation!</p>
                                        </div>
                                    )}

                                    <div className="space-y-6 pb-4">
                                        {messages.map((m) => {
                                            // Agent messages are 'outgoing' from backend perspective
                                            const isMine = m.type === 'outgoing'

                                            return (
                                                <div
                                                    key={m.id ? `${m.type}-${m.id}` : `local-${Date.now()}-${Math.random()}`}
                                                    className={`flex w-full ${isMine ? 'justify-end' : 'justify-start'}`}
                                                >
                                                    <div
                                                        className={`flex max-w-[75%] md:max-w-[60%] ${isMine ? 'flex-row-reverse' : 'flex-row'
                                                            } items-end gap-2`}
                                                    >
                                                        {!isMine && (
                                                            <div className="w-6 h-6 rounded-full bg-slate-200 flex-shrink-0 mb-1" />
                                                        )}

                                                        <div
                                                            className={`group relative p-3.5 px-5 rounded-2xl shadow-sm transition-all hover:shadow-md ${isMine
                                                                ? 'bg-indigo-600 text-white rounded-br-sm'
                                                                : 'bg-white text-slate-700 border border-slate-100 rounded-bl-sm'
                                                                }`}
                                                        >
                                                            <div className="text-[15px] leading-relaxed break-words">{m.message}</div>
                                                            <div
                                                                className={`text-[10px] font-medium mt-1 text-right opacity-70 ${isMine ? 'text-indigo-100' : 'text-slate-400'
                                                                    }`}
                                                            >
                                                                {formatTime(m.created_at)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        <div ref={messagesEndRef} />
                                    </div>
                                </div>
                            </div>

                            {/* Input */}
                            <div className="p-4 bg-white border-t border-slate-100">
                                <div className="max-w-4xl mx-auto flex items-end gap-2 bg-slate-50 p-2 rounded-2xl border border-slate-200 focus-within:border-indigo-300 focus-within:ring-4 focus-within:ring-indigo-500/10 transition-all shadow-sm">
                                    <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors self-center">
                                        <Paperclip size={20} />
                                    </button>

                                    <textarea
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        onKeyDown={onKeyDown}
                                        placeholder="Type your message..."
                                        className="flex-1 bg-transparent resize-none p-2.5 focus:outline-none text-slate-700 placeholder:text-slate-400 max-h-32"
                                        rows={1}
                                        style={{ minHeight: '44px' }}
                                    />

                                    <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors self-center">
                                        <Smile size={20} />
                                    </button>

                                    <button
                                        onClick={handleSend}
                                        disabled={!text.trim()}
                                        className="p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-200 transition-all hover:scale-105 active:scale-95 self-center"
                                    >
                                        <Send size={18} />
                                    </button>
                                </div>
                                <div className="text-center mt-2.5">
                                    <p className="text-[10px] text-slate-400">
                                        Press <kbd className="font-sans px-1 py-0.5 bg-slate-100 border rounded text-slate-500">Enter</kbd> to send
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })() : (
                    <div className="h-full flex flex-col items-center justify-center bg-slate-50/50 text-slate-400">
                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-slate-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                />
                            </svg>
                        </div>
                        <p className="text-lg font-medium text-slate-600">No Chat Selected</p>
                        <p className="text-sm mt-1">Select a customer from the sidebar to start messaging</p>
                    </div>
                )}
            </div>