import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Immunization: Protect Your Child’s Future() {
  const [zip, setZip] = useState("");
  const [results, setResults] = useState([]);

  const mockSearch = () => {
    // Placeholder data until real API integration
    setResults([
      {
        name: "Community Health Pharmacy",
        address: "123 Main St, Sample City",
        phone: "(555) 123-4567",
        website: "https://examplepharmacy.com"
      },
      {
        name: "County Health Department",
        address: "456 Health Ave, Sample City",
        phone: "(555) 987-6543",
        website: "https://countyhealth.gov"
      }
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card className="bg-gradient-to-r from-blue-50 to-green-50">
          <CardContent className="p-8 text-center space-y-3">
            <h2 className="text-2xl font-semibold">Protecting Families Through Immunization / Protegiendo a las Familias con la Inmunización</h2>
            <p className="text-gray-700">
              A nonprofit public‑service resource helping parents and communities access trusted
              vaccine information and nearby immunization services.
            </p>
          </CardContent>
        </Card>
        <div className="relative">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Immunization: Protect Your Child’s Future</h1>
            <p className="text-sm text-gray-500">ImmunizeFuture.org</p>
          </div>
          <div className="absolute right-0 top-0">
            <select className="border rounded px-2 py-1 text-sm" aria-label="Language selector">
              <option>English</option>
              <option>Español</option>
            </select>
          </div>
        </div>
        <p className="text-center text-gray-600">
          Trusted, science‑based information about vaccines, paired with a modern tool to find immunization locations near you.
        </p>

        <Card>
          <CardContent className="space-y-4 p-6">
            <h2 className="text-xl font-semibold">Why Immunizations Matter for Children and Communities</h2>
            <p>
              Vaccines protect children and adults from serious diseases by helping the immune system
              recognize and fight harmful infections. Widespread vaccination also protects communities
              through herd immunity.
            </p>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Protects infants, children, and adults</li>
              <li>Prevents outbreaks of dangerous diseases</li>
              <li>Helps protect people who cannot be vaccinated</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4 p-6">
            <h2 className="text-xl font-semibold">Find Immunization Locations Near You</h2>
            <p className="text-sm text-gray-600">Search by ZIP code, filter by vaccine type, and view results on a map or list.</p>
            <div className="flex gap-2">
              <select className="border rounded px-2 text-sm">
                <option>All Vaccines</option>
                <option>Childhood Vaccines</option>
                <option>Flu</option>
                <option>COVID-19</option>
                <option>Travel Vaccines</option>
              </select>
              <Input
                placeholder="Enter ZIP code"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
              <Button onClick={mockSearch}>Search</Button>
            </div>

            <div className="space-y-3">
              {results.map((r, i) => (
                <Card key={i} className="bg-white">
                  <CardContent className="p-4 space-y-1">
                    <h3 className="font-semibold">{r.name}</h3>
                    <p className="text-sm text-gray-600">{r.address}</p>
                    <p className="text-sm">📞 {r.phone}</p>
                    <a
                      href={r.website}
                      className="text-sm text-blue-600 underline"
                      target="_blank"
                    >
                      Visit website / Book appointment
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-3 p-6">
            <h2 className="text-xl font-semibold">For Parents</h2>
            <p>
              Keeping your child up to date on recommended immunizations helps protect them during
              their most vulnerable years and prevents the spread of serious diseases at school and
              in the community.
            </p>
            <p className="text-sm text-gray-600">
              Talk to your child’s pediatrician about the recommended vaccine schedule and any
              questions you may have.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-3 p-6">
            <h2 className="text-xl font-semibold">Contact Us / Contáctenos</h2>
            <p className="text-sm text-gray-700">
              Have questions or need help finding immunization resources in your area? We’re here to help.
            </p>
            <p className="text-sm">
              📞 <strong>Phone:</strong> 813-731-9221
            </p>
            <p className="text-sm">
              ✉️ <strong>Email:</strong> <a href="mailto:aespinoza0829@icloud.com" className="text-blue-600 underline">aespinoza0829@icloud.com</a>
            </p>
            <p className="text-xs text-gray-600">
              Este sitio es un recurso educativo de servicio público. No proporciona asesoramiento médico.
            </p>
          </CardContent>
        </Card>

        <footer className="text-center text-xs text-gray-500 pt-6">
          This nonprofit public‑service website provides educational information and does not replace professional medical advice. Always consult a healthcare provider.
        </footer>
      </div>
    </div>
  );
}
