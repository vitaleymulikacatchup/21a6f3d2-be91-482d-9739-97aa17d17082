"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardFourteen from '@/components/sections/feature/FeatureCardFourteen';
import ProductCardSix from '@/components/sections/product/ProductCardSix';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TeamCardNine from '@/components/sections/team/TeamCardNine';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Mountain, Compass, Star, Heart, Users, MapPin, Globe, ThumbsUp, Award, HelpCircle, Linkedin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="small"
      background="circleGradient"
      cardStyle="elevated"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="glass"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Mountain Peak Adventures"
          navItems={[
            { name: "Experiences", id: "features" },
            { name: "Packages", id: "packages" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{ text: "Book Adventure", href: "contact" }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Mountain Peak Adventures"
          description="Join our expert-guided expeditions. 40-50 transformative mountain adventures every month. From first-time hikers to experienced climbers, we have your perfect journey."
          tag="Mountain Adventures"
          tagIcon={Mountain}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766142486407-yl46uegn.jpg"
          imageAlt="Snow-capped mountain peak landscape"
          frameStyle="card"
          buttons={[
            { text: "Explore Trips", href: "packages" },
            { text: "Learn More", href: "about" }
          ]}
          containerClassName="bg-red-600"
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardFourteen
          title="Unforgettable Mountain Experiences"
          description="Each month we organize 40-50 carefully curated mountain expeditions. Our diverse range ensures there's a perfect adventure for every level and passion."
          tag="Experiences"
          tagIcon={Compass}
          features={[
            {
              id: "1",
              title: "Guided Hiking Expeditions",
              description: "Scenic trails through pristine mountain landscapes with experienced guides",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766142488514-94v34wuv.jpg",
              imageAlt: "Mountain hiking trail"
            },
            {
              id: "2",
              title: "Summit Camping",
              description: "Experience nights under the stars at breathtaking mountain elevations",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766142491204-fau5qtz4.jpg",
              imageAlt: "Camping in mountains"
            },
            {
              id: "3",
              title: "Rock Climbing",
              description: "Technical climbing experiences for all skill levels on natural rock faces",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766142492587-ofm4gj0g.jpg",
              imageAlt: "Rock climbing adventure"
            },
            {
              id: "4",
              title: "Peak Summits",
              description: "Reach the highest points with proper training and professional support",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766142494379-mzg8zi0c.jpg",
              imageAlt: "Mountain summit view"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="packages" data-section="packages">
        <ProductCardSix
          title="Featured Mountain Expeditions"
          description="Handpicked adventures from our monthly portfolio of 40-50 curated trips"
          tag="Popular"
          tagIcon={Star}
          products={[
            {
              id: "1",
              name: "Everest Base Camp Trek",
              price: "$1,299",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766142488514-94v34wuv.jpg",
              imageAlt: "Everest Base Camp"
            },
            {
              id: "2",
              name: "Alpine Peak Summit",
              price: "$899",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766142494379-mzg8zi0c.jpg",
              imageAlt: "Alpine peak climb"
            },
            {
              id: "3",
              name: "Mountain Wilderness Camp",
              price: "$649",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766142491204-fau5qtz4.jpg",
              imageAlt: "Mountain camping"
            },
            {
              id: "4",
              name: "Rock Climbing Intensive",
              price: "$799",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766142492587-ofm4gj0g.jpg",
              imageAlt: "Rock climbing course"
            }
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Our Story"
          tagIcon={Heart}
          title="We transform ordinary people into mountain adventurers"
          description="Founded by passionate mountaineers and guides"
          subdescription="Mountain Peak Adventures - Mountain Adventures Since 2015"
          icon={Mountain}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766142486407-yl46uegn.jpg"
          imageAlt="Mountain landscape"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Impact"
          description="Join thousands of adventurers who've experienced mountain magic with us"
          metrics={[
            {
              id: "1",
              value: "5,000+",
              title: "Adventurers",
              description: "Happy travelers explored mountains",
              icon: Users
            },
            {
              id: "2",
              value: "45",
              title: "Monthly Trips",
              description: "Curated expeditions every month",
              icon: MapPin
            },
            {
              id: "3",
              value: "8",
              title: "Countries",
              description: "Mountain ranges we operate in",
              icon: Globe
            },
            {
              id: "4",
              value: "98%",
              title: "Satisfaction",
              description: "Traveler approval rating",
              icon: ThumbsUp
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="What Adventurers Say"
          description="Real stories from real travelers who conquered mountains with us"
          tag="Reviews"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              handle: "@sarah_adventures",
              testimonial: "Best mountain experience of my life. The guides were incredible and made me feel safe every step of the way. Absolutely life-changing!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766142496448-7k5zh9k1.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              handle: "@mike_climbs",
              testimonial: "I'm a seasoned climber and was impressed by the professionalism and attention to detail. Mountain Peak Adventures sets the standard for mountain expeditions.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766142497874-jzh1w74y.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              handle: "@emma_explores",
              testimonial: "First time hiking at altitude and I was nervous. The team made me feel confident and supported throughout the entire journey. Highly recommend!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766142499821-v837zr25.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              handle: "@david_summits",
              testimonial: "The organization is flawless. From logistics to safety protocols, everything is perfectly planned. Reached my dream summit stress-free.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766142501989-2ixo69s1.jpg",
              imageAlt: "David Kim"
            },
            {
              id: "5",
              name: "Jessica Walsh",
              handle: "@jess_wanderer",
              testimonial: "Stunning landscapes, amazing people, unforgettable memories. This is how adventure travel should be done. Already planning my next trip!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766142496448-7k5zh9k1.jpg",
              imageAlt: "Jessica Walsh"
            },
            {
              id: "6",
              name: "Thomas Brown",
              handle: "@tom_explorer",
              testimonial: "Small group sizes, personal attention, and expert guidance. Mountain Peak Adventures understands what makes a truly exceptional mountain experience.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766142497874-jzh1w74y.jpg",
              imageAlt: "Thomas Brown"
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardNine
          title="Meet Our Expert Guides"
          description="Professional mountaineers and guides with decades of combined experience"
          tag="Leadership"
          tagIcon={Award}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
          members={[
            {
              id: "1",
              name: "Marcus Alpine",
              role: "Lead Mountain Guide",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766142503596-bqy3cta6.jpg",
              imageAlt: "Marcus Alpine",
              socialLinks: [{ icon: Linkedin, url: "https://linkedin.com" }]
            },
            {
              id: "2",
              name: "Sofia Peaks",
              role: "Summit Coach",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766142504881-zc79raxd.jpg",
              imageAlt: "Sofia Peaks",
              socialLinks: [{ icon: Linkedin, url: "https://linkedin.com" }]
            },
            {
              id: "3",
              name: "James Everest",
              role: "Expedition Leader",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766142506235-qyjwwius.jpg",
              imageAlt: "James Everest",
              socialLinks: [{ icon: Linkedin, url: "https://linkedin.com" }]
            },
            {
              id: "4",
              name: "Elena Ridge",
              role: "Safety Coordinator",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766142507498-j24026ws.jpg",
              imageAlt: "Elena Ridge",
              socialLinks: [{ icon: Linkedin, url: "https://linkedin.com" }]
            }
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about our mountain expeditions"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What experience level do I need?",
              content: "We offer trips for all levels. Beginners can start with our easy hiking trails and guided walks. Intermediate climbers can tackle alpine peaks, and experienced mountaineers can join our technical expeditions. Each trip clearly indicates the required fitness level and technical skills."
            },
            {
              id: "2",
              title: "What's included in the package price?",
              content: "Our packages include professional guide services, accommodation, meals, permits, and basic equipment rental. Additional costs may apply for premium services or specialized gear. See individual trip details for specific inclusions."
            },
            {
              id: "3",
              title: "How many people are in a typical group?",
              content: "We keep groups small, typically 8-12 people per expedition. This ensures personalized attention, safety, and a genuine mountain experience. Larger groups can be accommodated with prior arrangement."
            },
            {
              id: "4",
              title: "What months are best for mountain climbing?",
              content: "Peak climbing season varies by region. Summer (June-September) is ideal for most peaks. We organize expeditions year-round to different mountains, ensuring optimal conditions for each destination. Check our monthly calendar for available trips."
            },
            {
              id: "5",
              title: "Is travel insurance required?",
              content: "Yes, comprehensive travel and mountain climbing insurance is mandatory. We can recommend trusted providers that cover altitude-related incidents and evacuations. Details are provided upon booking."
            },
            {
              id: "6",
              title: "Can I customize a private expedition?",
              content: "Absolutely! We specialize in customized group expeditions. Contact our team with your requirements, and we'll design a perfect adventure tailored to your goals, timeline, and budget."
            },
            {
              id: "7",
              title: "What's your cancellation policy?",
              content: "Cancellations made 60+ days before departure receive a full refund. 30-60 days: 50% refund. Less than 30 days: non-refundable. Weather delays are handled case-by-case with rescheduling options available."
            },
            {
              id: "8",
              title: "How do you ensure safety?",
              content: "Safety is our priority. All guides are certified and trained in wilderness first aid. We conduct pre-climb briefings, provide quality equipment, monitor weather conditions, and maintain strict protocols for high-altitude operations."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactInline
          text="Ready for your mountain adventure?"
          animationType="background-highlight"
          inputPlaceholder="Enter your email"
          buttonText="Start Planning"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Mountain Peak Adventures"
          copyrightText="© 2025 Mountain Peak Adventures. All rights reserved."
          columns={[
            {
              title: "Expeditions",
              items: [
                { label: "Monthly Trips", href: "#packages" },
                { label: "Difficulty Levels", href: "#features" },
                { label: "Destinations", href: "#packages" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Team", href: "#team" },
                { label: "Testimonials", href: "#testimonials" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "#faq" },
                { label: "Contact Us", href: "#contact" },
                { label: "Book Now", href: "#contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Safety Guidelines", href: "/safety" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}