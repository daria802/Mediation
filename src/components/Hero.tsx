import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Value Proposition */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl tracking-tight"
                style={{ fontWeight: 500, lineHeight: 1.1 }}
              >
                Reclaim Your Mental Space
              </h1>
              <p 
                className="text-lg md:text-xl text-foreground/70 max-w-lg"
                style={{ lineHeight: 1.6 }}
              >
                Science-backed meditation for high-performers seeking clarity, 
                focus, and inner peace.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              >
                Start Your Journey
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-primary/30 hover:border-primary"
              >
                Explore Practices
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-6">
              <div className="text-sm text-foreground/60">
                <div className="font-medium text-foreground">10,000+</div>
                <div>Active practitioners</div>
              </div>
              <div className="h-8 w-px bg-border"></div>
              <div className="text-sm text-foreground/60">
                <div className="font-medium text-foreground">4.9/5</div>
                <div>Average rating</div>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
                alt="Serene meditation scene"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating accent element */}
            <div 
              className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-secondary/30 blur-3xl"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
