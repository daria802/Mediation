import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer className="bg-[#2C362E] text-[#F5F5F0]">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
        {/* Newsletter Section */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <h3 
            className="text-2xl md:text-3xl mb-3"
            style={{ fontWeight: 500 }}
          >
            Receive Weekly Calm
          </h3>
          <p className="text-[#F5F5F0]/70 mb-6">
            Guided practices, insights, and gentle reminders delivered to your inbox
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-[#F5F5F0]/10 border-[#F5F5F0]/20 text-[#F5F5F0] placeholder:text-[#F5F5F0]/40 rounded-full px-6 h-12 focus:border-[#D9AD98]"
            />
            <Button 
              type="submit"
              className="bg-[#D9AD98] hover:bg-[#D9AD98]/90 text-[#2C362E] rounded-full px-8 h-12"
            >
              Subscribe
            </Button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <h4 className="font-medium mb-4">Practices</h4>
            <ul className="space-y-2 text-sm text-[#F5F5F0]/70">
              <li><a href="#" className="hover:text-[#D9AD98] transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-[#D9AD98] transition-colors">Methods</a></li>
              <li><a href="#" className="hover:text-[#D9AD98] transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-[#D9AD98] transition-colors">Free Trials</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-medium mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-[#F5F5F0]/70">
              <li><a href="#" className="hover:text-[#D9AD98] transition-colors">Join Us</a></li>
              <li><a href="#" className="hover:text-[#D9AD98] transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-[#D9AD98] transition-colors">Forum</a></li>
              <li><a href="#" className="hover:text-[#D9AD98] transition-colors">Teachers</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-medium mb-4">Learn</h4>
            <ul className="space-y-2 text-sm text-[#F5F5F0]/70">
              <li><a href="#" className="hover:text-[#D9AD98] transition-colors">Philosophy</a></li>
              <li><a href="#" className="hover:text-[#D9AD98] transition-colors">Research</a></li>
              <li><a href="#" className="hover:text-[#D9AD98] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#D9AD98] transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-[#F5F5F0]/70">
              <li><a href="#" className="hover:text-[#D9AD98] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#D9AD98] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#D9AD98] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#D9AD98] transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#F5F5F0]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl" style={{ fontWeight: 500 }}>
              Lumina
            </div>

            <div className="flex gap-6 text-sm text-[#F5F5F0]/60">
              <a href="#" className="hover:text-[#D9AD98] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#D9AD98] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#D9AD98] transition-colors">Cookie Policy</a>
            </div>

            <div className="text-sm text-[#F5F5F0]/60">
              © 2026 Lumina Meditations
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
