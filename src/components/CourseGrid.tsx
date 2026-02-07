import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Course {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: string;
  duration: string;
  imageUrl: string;
}

const courses: Course[] = [
  {
    id: "1",
    title: "Morning Mindfulness",
    description: "Start your day with clarity and intention. Perfect for building a consistent practice.",
    level: "Beginner",
    price: "$29",
    duration: "4 weeks",
    imageUrl: "https://images.unsplash.com/photo-1567556901271-f63d10189df3?w=600&q=80",
  },
  {
    id: "2",
    title: "Zen Flow",
    description: "Deep meditation techniques for stress relief and emotional balance.",
    level: "Intermediate",
    price: "$49",
    duration: "8 weeks",
    imageUrl: "https://images.unsplash.com/photo-1764112434647-bfd7d5ccb10d?w=600&q=80",
  },
  {
    id: "3",
    title: "Transcendence",
    description: "Advanced practices for spiritual growth and peak performance states.",
    level: "Advanced",
    price: "$79",
    duration: "12 weeks",
    imageUrl: "https://images.unsplash.com/photo-1760970962933-59e374b70cdc?w=600&q=80",
  },
];

export function CourseGrid() {
  return (
    <section id="courses" className="py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl mb-4"
            style={{ fontWeight: 500 }}
          >
            Curated Journeys
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose a path that resonates with your current state and aspirations
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-card rounded-[2rem] overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <ImageWithFallback
                  src={course.imageUrl}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Price Tag Overlay */}
                <div className="absolute top-4 right-4 bg-card/95 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="font-medium text-foreground">{course.price}</span>
                </div>

                {/* Level Badge */}
                <div className="absolute top-4 left-4">
                  <Badge 
                    variant={course.level === "Beginner" ? "secondary" : course.level === "Advanced" ? "default" : "outline"}
                    className="rounded-full"
                  >
                    {course.level}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl">{course.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-foreground/60">{course.duration}</span>
                  <Button 
                    size="sm"
                    className="rounded-full bg-primary hover:bg-primary/90"
                  >
                    Enrol
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
