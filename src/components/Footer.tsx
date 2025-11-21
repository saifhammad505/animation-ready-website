import { Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">DataPearls</div>
            <p className="text-sm opacity-80">
              Transforming data chaos into insights, clarity & action.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  BI-as-a-Service
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  Data Analytics
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  BI Dashboards
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  Data Engineering
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#about" className="hover:opacity-100 transition-opacity">
                  About Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:opacity-100 transition-opacity">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>© 2024 DataPearls Analytics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
