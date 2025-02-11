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

/**
 * The Services component displays a list of services offered by Classics Revisited.
 * It adapts its layout based on the screen size: using an accordion for mobile devices
 * and a grid of cards for desktop devices.
 *
 * @returns The Services component.
 */
export default function Services() {
  // Utilize the useScreenSize hook to determine if the device is mobile
  const { isMobile } = useScreenSize();

  // Render the main section of the component
  return (
    <section className="container min-w-full border p-8 md:p-12 lg:p-20">
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
            {/* Map through the services data and render each as an AccordionItem */}
            {services.map((service, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                {/* Each service is wrapped in a Card component for styling */}
                <Card className="mb-4 p-4">
                  {/* AccordionTrigger displays the service title */}
                  <AccordionTrigger className="w-full p-4">
                    <CardHeader className="p-0">
                      <CardTitle className="text-xl font-bold">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                  </AccordionTrigger>
                  {/* AccordionContent displays the service description when expanded */}
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
            {/* Map through the services data and render each as a standalone Card */}
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
