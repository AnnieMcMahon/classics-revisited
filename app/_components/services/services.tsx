'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { services } from '@/data/services';
import { useScreenSize } from '@/lib/hooks/useScreenSize';

export default function Services() {
  const { isMobile } = useScreenSize();

  return (
    <section className="container min-w-full border p-8 md:p-12 lg:p-20" id="services">
      {/* Container for the title and introductory text */}
      <div className="max-w-7xl">
        <h1 className="text-2xl font-bold md:text-[2rem]">Services</h1>
        <p className="pt-2 text-[15px] md:text-xl">
          At Classics Revisited, we specialize in blending timeless design with
          modern functionality.
          <br />
          Whether you&apos;re restoring a historic home or creating a new space
          with vintage-inspired charm, our team is here to bring your vision to
          life.
          <br />
          Explore our range of services:
        </p>
      </div>

      {/* Container for the service items, layout changes based on screen size */}
      <div className="mt-6">
        {isMobile ? (
          // For mobile devices: Display services using an accordion component
          <Accordion type="single" collapsible className="w-full">
            {services.map((service, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <Card className="mb-4 p-4">
                  <AccordionTrigger className="w-full p-4">
                    <CardHeader className="p-0">
                      <CardTitle className="text-xl font-bold">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                  </AccordionTrigger>

                  <AccordionContent>
                    <CardContent>
                      <p className="text-xl">{service.description}</p>
                    </CardContent>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          // For desktop devices: Display services as a grid of Card components
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <Card key={index} className="p-4">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xl">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
