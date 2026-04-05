import About from "@/components/About";
import CTA from "@/components/CTA";
import { motion } from "motion/react";
import { Target, Eye, Shield, Lightbulb, Heart, Zap, History, Users, Award } from "lucide-react";

const values = [
  {
    title: "Integrity",
    description: "We uphold the highest standards of integrity in all of our actions.",
    icon: Shield
  },
  {
    title: "Innovation",
    description: "We constantly seek innovative solutions to complex engineering challenges.",
    icon: Lightbulb
  },
  {
    title: "Quality",
    description: "We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.",
    icon: Award
  },
  {
    title: "Commitment",
    description: "We are committed to our clients, our team, and the communities we serve.",
    icon: Heart
  }
];

const timeline = [
  {
    year: "2012",
    title: "The Foundation",
    description: "Acier Building Tech was established with a vision to revolutionize steel construction in Bangladesh."
  },
  {
    year: "2015",
    title: "Industrial Expansion",
    description: "Successfully completed our first major industrial complex, setting a new benchmark for structural integrity."
  },
  {
    year: "2018",
    title: "Technological Leap",
    description: "Integrated advanced BIM and CAD technologies into our design and fabrication processes."
  },
  {
    year: "2021",
    title: "Regional Leadership",
    description: "Recognized as a leading construction firm for humanitarian and commercial sectors."
  },
  {
    year: "2024",
    title: "Sustainable Future",
    description: "Launching new initiatives for eco-friendly and sustainable building practices."
  }
];

const team = [
  {
    name: "Munni Khanam",
    role: "Chairman",
    description: "B.Com (Honors), M.Com (Accounting), MBA (Finance)",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Engr. Anowarul Kabir",
    role: "Managing Director",
    description: "Over 25 years of experience in the construction industry, mainly in Bangladesh and the Middle East.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Engr. Moniruzzaman Rayhan",
    role: "Team Leader",
    description: "Over 6 years in the construction industry, mainly in Bangladesh with exposure in the Steel Design & Construction.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Engr. Zahedur Rahman Gazi",
    role: "Project Coordinator",
    description: "Over 24 years in the construction industry, mainly in Bangladesh Real Estate Sector & the Steel Construction.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Shafiqur Rahman",
    role: "Legal Advisor & COO (Co-Founder)",
    description: "Bachelor of Law (LLB Honours) Open University (UK), LLB with International Law (LLB) Kingston University",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Md. Shaheen Sharif",
    role: "Executive Director (Co-Founder)",
    description: "English Honors & MBA Goldsmith University of London",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Md. Millat Hossain",
    role: "Human Resources",
    description: "B.Com Accounting, M.Com Accounting Manager",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Md. Hafiz al Asad Akash",
    role: "Manager (Accounts)",
    description: "B.Com Accounting, M.Com Accounting.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Engr. Muhammad Saiful Islam",
    role: "Senior Structure Engineer",
    description: "B.Sc in Civil Engineering - BUET (FIEB no.12487)",
    image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Engr. Rita Khatun",
    role: "Structural Designer",
    description: "B.Sc. In Civil Engineering (Duet)",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Md. Kaisar Hossain",
    role: "Architect",
    description: "B. Arch - BUET",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Engr. Abdullah Al Razi Khan Chowdhury",
    role: "Project Manager",
    description: "B.Sc in Civil Engineering",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Md. Humain Kabir",
    role: "Electrical Engineer",
    description: "B.Sc in Electrical Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden min-h-[600px] flex items-center bg-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000"
            alt="About Acier"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-white/40" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="text-brand-red uppercase tracking-[0.3em] text-xs font-bold">
                Our Identity
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-brand-dark leading-[0.9] tracking-tighter uppercase mb-8">
              Engineering <br />
              <span className="text-brand-red">Excellence</span>.
            </h1>
            <p className="text-brand-dark text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
              Since 2012, we have been at the forefront of structural innovation, building the backbone of modern infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legacy Section (Existing About Component) */}
      <About showButton={false} />

      {/* Mission & Vision Section */}
      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 shadow-xl border-l-8 border-brand-red"
            >
              <div className="w-16 h-16 bg-brand-light flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-brand-red" />
              </div>
              <h2 className="text-3xl font-bold text-brand-dark uppercase tracking-tighter mb-6">Our Mission</h2>
              <p className="text-brand-dark/70 leading-relaxed text-lg">
                At acieR building technology, our mission is to deliver innovative, reliable, and sustainable construction solutions that meet the diverse needs of modern infrastructure. We specialize in RCC and steel building construction, interior works such as tiles fitting, wall cabinets, false ceilings, and painting, along with high-quality material supply and professional fabrication services.
With our dedicated steel workshop for fabrication, erection, and installation, we ensure precision, durability, and timely execution in every project. In addition, we manufacture premium parking tiles and eco-friendly hemp blocks, supporting green building practices and long-lasting infrastructure development.
Through a customer-focused approach, skilled workforce, and advanced technologies, we are committed to creating safe, functional, and aesthetically pleasing spaces that inspire the way people live, work, and build the future
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 shadow-xl border-l-8 border-brand-red"
            >
              <div className="w-16 h-16 bg-brand-light flex items-center justify-center mb-8">
                <Eye className="w-8 h-8 text-brand-red" />
              </div>
              <h2 className="text-3xl font-bold text-brand-dark uppercase tracking-tighter mb-6">Our Vision</h2>
              <p className="text-brand-dark/70 leading-relaxed text-lg">
               At acieR Building Technology, our vision is to be a leading force in the construction and building solutions industry by delivering innovative, sustainable, and high-quality projects. We aim to transform spaces through excellence in RCC and steel construction, interior design, and material manufacturing, including eco-friendly solutions like hemp blocks and parking tiles. By combining advanced design, precision fabrication, and reliable installation services, we strive to create structures that are not only functional and durable but also aesthetically inspiring, contributing to a smarter and greener built environment for the country and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="text-brand-red uppercase tracking-[0.3em] text-xs font-bold">
                What Drives Us
              </span>
              <div className="h-[2px] w-12 bg-brand-red" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-dark uppercase tracking-tighter">
              Our Core <span className="text-brand-red">Values</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-brand-dark/5 hover:border-brand-red/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-brand-light flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
                  <value.icon className="w-6 h-6 text-brand-red group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4 uppercase tracking-tight">{value.title}</h3>
                <p className="text-brand-dark/60 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-brand-dark/5">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-red via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="text-brand-red uppercase tracking-[0.3em] text-xs font-bold">
                Our Journey
              </span>
              <div className="h-[2px] w-12 bg-brand-red" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-dark uppercase tracking-tighter">
              Milestones <span className="text-brand-red">Through</span> Time.
            </h2>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-brand-dark/10 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 text-left md:text-right w-full">
                    {index % 2 !== 0 && (
                      <div className="md:pr-12">
                        <span className="text-brand-red text-4xl font-bold mb-2 block">{item.year}</span>
                        <h3 className="text-xl font-bold text-brand-dark uppercase mb-2">{item.title}</h3>
                        <p className="text-brand-dark/50 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="relative z-20">
                    <div className="w-12 h-12 bg-brand-red flex items-center justify-center rounded-full border-4 border-white">
                      <History className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-left w-full">
                    {index % 2 === 0 && (
                      <div className="md:pl-12">
                        <span className="text-brand-red text-4xl font-bold mb-2 block">{item.year}</span>
                        <h3 className="text-xl font-bold text-brand-dark uppercase mb-2">{item.title}</h3>
                        <p className="text-brand-dark/50 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="text-brand-red uppercase tracking-[0.3em] text-xs font-bold">
                Our Leadership
              </span>
              <div className="h-[2px] w-12 bg-brand-red" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-dark uppercase tracking-tighter">
              The Minds <span className="text-brand-red">Behind</span> Acier.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark uppercase tracking-tight mb-1">{member.name}</h3>
                <p className="text-brand-red text-xs font-bold uppercase tracking-widest mb-3">{member.role}</p>
                <p className="text-brand-dark/60 text-sm leading-relaxed font-light">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}

