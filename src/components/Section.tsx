interface SectionProps {
    backgroundColor?: string;
    children: React.ReactNode;
    className?: string;
    id?: string;
  }
  
  const Section: React.FC<SectionProps> = ({ 
    backgroundColor, 
    children, 
    className = '',
    id 
  }) => {
    return (
      <section 
        id={id}
        className={`min-h-screen w-full ${className}`}
        style={{ backgroundColor }}
      >
        <div className="container mx-auto px-4 md:px-8 py-16 max-w-[1440px]">
          {children}
        </div>
      </section>
    );
  };
  
  export default Section;