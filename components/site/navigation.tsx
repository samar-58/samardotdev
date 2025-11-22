"use client";

import React from "react";
import { motion } from "framer-motion";

const navItems = [
    { name: "about", id: "about" },
    { name: "terminal", id: "terminal" },
    { name: "skills", id: "skills" },
    { name: "projects", id: "projects" },
];

export const Navigation = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
        >
            <nav className="flex items-center gap-1 p-1 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-800 shadow-lg">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="px-4 py-2 text-xs font-poppins text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-full transition-all"
                    >
                        {item.name}
                    </button>
                ))}
            </nav>
        </motion.div>
    );
};
