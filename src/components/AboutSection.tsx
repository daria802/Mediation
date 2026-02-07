export function AboutSection() {
  return (
    <section id="philosophy" className="py-20 md:py-32 bg-primary/5">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="space-y-4">
              <h2 
                className="text-4xl md:text-5xl"
                style={{ fontWeight: 500 }}
              >
                The Philosophy of Presence
              </h2>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Our approach combines ancient contemplative traditions with 
                  modern neuroscience. Every practice is designed to create 
                  measurable shifts in your mental clarity and emotional resilience.
                </p>
                <p>
                  We believe meditation isn't about escaping reality—it's about 
                  engaging with it more fully. Through systematic training of 
                  attention and awareness, you develop the capacity to respond 
                  rather than react.
                </p>
                <p>
                  Founded on principles from Buddhist psychology, Stoic philosophy, 
                  and contemporary research in mindfulness-based interventions, 
                  Lumina offers a path that honors tradition while embracing 
                  scientific rigor.
                </p>
              </div>
            </div>

            {/* Founder's Signature */}
            <div className="pt-6 border-t border-border/50">
              <p className="text-sm text-foreground/60 italic">
                "True meditation is not about feeling good. It's about feeling what is—and finding peace within that truth."
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div 
                  className="text-2xl opacity-50"
                  style={{ fontFamily: 'Brush Script MT, cursive' }}
                >
                  Elena Rivers
                </div>
                <span className="text-sm text-foreground/60">— Founder</span>
              </div>
            </div>
          </div>

          {/* Right: Stats or Visual Element */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="bg-card rounded-[2rem] p-8 border border-border/50">
              <div className="space-y-6">
                <div>
                  <div className="text-5xl mb-2" style={{ fontWeight: 500 }}>15+</div>
                  <div className="text-foreground/70">Years of research-backed practice</div>
                </div>
                <div className="h-px bg-border"></div>
                <div>
                  <div className="text-5xl mb-2" style={{ fontWeight: 500 }}>10k+</div>
                  <div className="text-foreground/70">Students transformed</div>
                </div>
                <div className="h-px bg-border"></div>
                <div>
                  <div className="text-5xl mb-2" style={{ fontWeight: 500 }}>98%</div>
                  <div className="text-foreground/70">Report reduced stress levels</div>
                </div>
              </div>
            </div>

            {/* Credentials */}
            <div className="bg-card rounded-[2rem] p-6 border border-border/50">
              <h4 className="text-sm uppercase tracking-wider text-foreground/60 mb-4">
                Scientific Grounding
              </h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• Certified MBSR Instructor</li>
                <li>• Neuroscience of Meditation Research</li>
                <li>• Traditional Vipassana Training</li>
                <li>• Published in Mindfulness Journal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
