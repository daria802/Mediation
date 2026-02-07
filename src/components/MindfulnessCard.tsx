"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function MindfulnessCard() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 
              className="text-3xl md:text-4xl mb-3"
              style={{ fontWeight: 500 }}
            >
              Experience Presence
            </h2>
            <p className="text-foreground/70">
              Hover over the circle and breathe with the rhythm
            </p>
          </div>

          {/* Interactive Breathing Card */}
          <motion.div
            className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/5 rounded-[3rem] overflow-hidden border border-border/50 p-12 md:p-16 flex items-center justify-center min-h-[400px]"
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Breathing Circle */}
            <motion.div
              className="relative"
              style={{
                width: isHovering ? "200px" : "120px",
                height: isHovering ? "200px" : "120px",
              }}
              animate={{
                scale: isHovering ? [1, 1.3, 1] : 1,
              }}
              transition={{
                duration: isHovering ? 6 : 0.5,
                repeat: isHovering ? Infinity : 0,
                ease: "easeInOut",
              }}
            >
              {/* Inner Glow */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/40 to-secondary/40"
                animate={{
                  opacity: isHovering ? [0.4, 0.8, 0.4] : 0.4,
                }}
                transition={{
                  duration: 6,
                  repeat: isHovering ? Infinity : 0,
                  ease: "easeInOut",
                }}
                style={{
                  filter: "blur(20px)",
                }}
              />
              
              {/* Core Circle */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-card"
                animate={{
                  boxShadow: isHovering 
                    ? [
                        "0 0 20px rgba(74, 93, 78, 0.3)",
                        "0 0 60px rgba(74, 93, 78, 0.5)",
                        "0 0 20px rgba(74, 93, 78, 0.3)",
                      ]
                    : "0 0 20px rgba(74, 93, 78, 0.3)",
                }}
                transition={{
                  duration: 6,
                  repeat: isHovering ? Infinity : 0,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Breathing Instructions */}
            <motion.div
              className="absolute bottom-8 left-0 right-0 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovering ? 1 : 0.6 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm text-foreground/70">
                {isHovering ? (
                  <motion.span
                    key="breathing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    Breathe in... hold... breathe out...
                  </motion.span>
                ) : (
                  "Hover to begin"
                )}
              </p>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-primary/30" />
            <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-secondary/30" />
          </motion.div>

          {/* Additional Context */}
          <div className="text-center mt-8 text-sm text-foreground/60">
            <p>This simple exercise activates your parasympathetic nervous system,</p>
            <p>promoting a state of calm and present-moment awareness.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
