"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";

type Command = {
    command: string;
    output: React.ReactNode;
};

export const Terminal = () => {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<Command[]>([
        {
            command: "help",
            output: "Available commands: help, about, skills, projects, contact, clear",
        },
    ]);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        let output: React.ReactNode = "";

        switch (trimmedCmd) {
            case "help":
                output = "Available commands: help, about, skills, projects, contact, clear";
                break;
            case "about":
                output = (
                    <div className="space-y-2">
                        <p>Hi! I&apos;m Samar, a fullstack developer.</p>
                        <p>I love building software and exploring new technologies.</p>
                    </div>
                );
                break;
            case "skills":
                output = (
                    <div className="grid grid-cols-2 gap-2 max-w-md">
                        <div>• React / Next.js</div>
                        <div>• Node.js / Express</div>
                        <div>• TypeScript</div>
                        <div>• PostgreSQL</div>
                        <div>• React Native</div>
                        <div>• AWS</div>
                    </div>
                );
                break;
            case "projects":
                output = (
                    <div className="space-y-2">
                        <div>
                            <span className="text-blue-400">aryventory</span> - Retail inventory management
                        </div>
                        <div>
                            <span className="text-blue-400">goschoolify</span> - School management platform
                        </div>
                        <div>
                            <span className="text-blue-400">crowdmint</span> - Solana data labelling
                        </div>
                    </div>
                );
                break;
            case "contact":
                output = (
                    <div className="space-y-1">
                        <p>Email: sayedsamar58@gmail.com</p>
                        <p>GitHub: github.com/samar-58</p>
                    </div>
                );
                break;
            case "clear":
                setHistory([]);
                return;
            default:
                output = `Command not found: ${trimmedCmd}. Type 'help' for available commands.`;
        }

        setHistory([...history, { command: cmd, output }]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        handleCommand(input);
        setInput("");
    };

    return (
        <section className="py-12 border-t border-border">
            <div className="px-4">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-lg font-poppins font-semibold mb-8 text-muted-foreground flex items-center gap-2"
                >
                    <TerminalIcon className="w-5 h-5" />
                    terminal
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[var(--terminal-bg)] rounded-lg border border-[var(--terminal-border)] overflow-hidden font-mono text-sm shadow-2xl"
                    onClick={() => inputRef.current?.focus()}
                >
                    <div className="flex items-center gap-2 px-4 py-2 bg-[var(--terminal-header-bg)] border-b border-[var(--terminal-border)]">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                        <span className="ml-2 text-xs text-[var(--terminal-text-muted)]">guest@samar.dev: ~</span>
                    </div>

                    <div
                        ref={containerRef}
                        className="p-4 h-[400px] overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-[var(--terminal-border)] scrollbar-track-transparent"
                    >
                        {history.map((entry, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex items-center gap-2 text-[var(--terminal-text-muted)]">
                                    <span className="text-green-400">➜</span>
                                    <span className="text-blue-400">~</span>
                                    <span>{entry.command}</span>
                                </div>
                                <div className="text-[var(--terminal-text)] pl-6 leading-relaxed">
                                    {entry.output}
                                </div>
                            </div>
                        ))}

                        <form onSubmit={handleSubmit} className="flex items-center gap-2 text-[var(--terminal-text-muted)]">
                            <span className="text-green-400">➜</span>
                            <span className="text-blue-400">~</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 bg-transparent outline-none text-[var(--terminal-input)] placeholder:text-[var(--terminal-text-muted)]/50"
                                placeholder="type 'help' to start..."
                            />
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
