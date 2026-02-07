import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div 
        className="backdrop-blur-md bg-background/60 border-b border-border/50"
        style={{ backdropFilter: 'blur(12px)' }}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl tracking-tight" style={{ fontWeight: 500 }}>
                Lumina
              </h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a 
                href="#courses" 
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Courses
              </a>
              <a 
                href="#methods" 
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Methods
              </a>
              <a 
                href="#philosophy" 
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Philosophy
              </a>
              <a 
                href="#reviews" 
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Reviews
              </a>
            </nav>

            {/* CTA */}
            <Button 
              variant="outline" 
              className="rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground"
            >
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
