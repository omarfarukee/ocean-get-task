"use client"
/* eslint-disable react-hooks/purity */
import React from 'react';
import { motion } from "framer-motion";
const RetroLine = () => {
    return (
         <div className="absolute inset-0">
                {/* Large Floating Circles */}
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={`large-${i}`}
                        className="absolute"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0.1, 0.3, 0.1],
                            scale: [1, 1.2, 1],
                            x: [0, Math.random() * 300 - 150],
                            y: [0, Math.random() * 300 - 150],
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            delay: i * 2,
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 400 + 200}px`,
                            height: `${Math.random() * 400 + 200}px`,
                        }}
                    >
                        <div className="w-full h-full bg-linear-to-r from-black to-black/10 rounded-full blur-3xl hidden" />
                    </motion.div>
                ))}

                {/* Small Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        className="absolute w-2 h-2 bg-black/20 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            x: [0, Math.random() * 100 - 50],
                            y: [0, Math.random() * 100 - 50],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            delay: i * 0.3,
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}

                <div className="absolute inset-0">
                    {/* Horizontal animated lines */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={`hline-${i}`}
                            className="absolute h-px bg-linear-to-r from-transparent via-[#0808082c] to-transparent"
                            initial={{ opacity: 0, width: "0%" }}
                            animate={{
                                opacity: [0, 1, 0],
                                width: ["0%", "100%", "0%"],
                                x: [-100, 0, 100],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                delay: i * 2,
                            }}
                            style={{
                                top: `${20 + i * 15}%`,
                                left: "0",
                            }}
                        />
                    ))}

                    {/* Vertical animated lines */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={`vline-${i}`}
                            className="absolute w-px bg-linear-to-b from-transparent via-[#00000038] to-transparent"
                            initial={{ opacity: 0, height: "0%" }}
                            animate={{
                                opacity: [0, 1, 0],
                                height: ["0%", "100%", "0%"],
                                y: [-100, 0, 100],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                delay: i * 2,
                            }}
                            style={{
                                left: `${20 + i * 15}%`,
                                top: "0",
                                height: "100%", // full height to animate height properly
                            }}
                        />
                    ))}
                </div>



            </div>
    );
};

export default RetroLine;