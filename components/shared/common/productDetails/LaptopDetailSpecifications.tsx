import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import type {
  Laptop,
  Display,
  ProcessorDetails,
  IoDetails,
  Communications,
  GeneralDetails,
} from "@/types";

const LaptopDetailSpecifications = ({ product }: { product: Laptop }) => {
  const {
    display,
    processorDetails,
    ioDetails,
    communications,
    generalDetails,
  } = product;
  return (
    <div>
      <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>
      <h2 className="mb-3 font-bold text-primary">Display</h2>
    </AccordionTrigger>
    <AccordionContent>
      <DisplayFeatures display={display} />
     
    </AccordionContent>
  </AccordionItem>
</Accordion>
      <Accordion type="single" collapsible>
  <AccordionItem value="item-2">
    <AccordionTrigger>
      <h2 className="mb-3 font-bold text-primary">Processor</h2>
    </AccordionTrigger>
    <AccordionContent>
      <ProcessorDetails processorDetails={processorDetails} />
    </AccordionContent>
  </AccordionItem>
</Accordion>
      <Accordion type="single" collapsible>
  <AccordionItem value="item-3">
    <AccordionTrigger>
    <h2 className="mb-3 font-bold text-primary">Input / Output</h2>
    
    </AccordionTrigger>
    <AccordionContent>
      <IoDetails ioDetails={ioDetails} />
    </AccordionContent>
  </AccordionItem>
</Accordion>
      <Accordion type="single" collapsible>
  <AccordionItem value="item-4">
    <AccordionTrigger>
<h2 className="mb-3 font-bold text-primary">Communications</h2>
    </AccordionTrigger>
    <AccordionContent>
      <Communications communications={communications} />
    </AccordionContent>
  </AccordionItem>
</Accordion>
      <Accordion type="single" collapsible>
  <AccordionItem value="item-4">
    <AccordionTrigger>
<h2 className="mb-3 font-bold text-primary">General Details</h2>
    </AccordionTrigger>
    <AccordionContent>
      <GeneralDetails generalDetails={generalDetails} />
    </AccordionContent>
  </AccordionItem>
</Accordion>
 <div>
        <h2 className="mb-3 mt-5 font-bold text-primary">
          Supplied Accessories
        </h2>
        <ul className="ml-10 list-disc">
          {product.suppliedAccessories!.map((accessory) => (
            <li key={accessory}>{accessory}</li>
          ))}
        </ul>
      </div>
  
    </div>
  );
};

export default LaptopDetailSpecifications;

const DisplayFeatures = ({ display }: { display: Display }) => {
  return (
    <div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Dimensions</TableCell>
            <TableCell className="text-right">{`${display.dimensions.length} x ${display.dimensions.width} x ${display.dimensions.height} inches`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Color</TableCell>
            <TableCell className="text-right">{display.color}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Panel Type</TableCell>
            <TableCell className="text-right">{display.panelType}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Resolution</TableCell>
            <TableCell className="text-right">{display.resolution}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Surface Type</TableCell>
            <TableCell className="text-right">{display.surfaceType}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Refresh Rate</TableCell>
            <TableCell className="text-right">{display.refreshRate}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

const GeneralDetails = ({
  generalDetails,
}: {
  generalDetails: GeneralDetails;
}) => {
  return (
    <div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Security</TableCell>
            <TableCell className="text-right">
              {generalDetails.security.join(", ")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Power Supply</TableCell>
            <TableCell className="text-right">
              {generalDetails.powerSupply}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dimensions</TableCell>
            <TableCell className="text-right">
              {generalDetails.dimensions}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Weight</TableCell>
            <TableCell className="text-right">
              {generalDetails.weight}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

const Communications = ({
  communications,
}: {
  communications: Communications;
}) => {
  return (
    <div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>WiFi</TableCell>
            <TableCell className="text-right">{communications.wifi}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bluetooth</TableCell>
            <TableCell className="text-right">
              {communications.bluetooth}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cellular Support</TableCell>
            <TableCell className="text-right">
              {communications.cellularSupport ? "Yes" : "No"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>GPS</TableCell>
            <TableCell className="text-right">
              {communications.gps ? "Yes" : "No"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Webcam</TableCell>
            <TableCell className="text-right">
              {communications.webcam}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

const IoDetails = ({ ioDetails }: { ioDetails: IoDetails }) => {
  return (
    <div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Audio I/O</TableCell>
            <TableCell className="text-right">{ioDetails.audioIO}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Network I/O</TableCell>
            <TableCell className="text-right">{ioDetails.networkIO}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Built-in Speakers</TableCell>
            <TableCell className="text-right">
              {ioDetails.builtInSpeakers ? "Yes" : "No"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Built-in Microphones</TableCell>
            <TableCell className="text-right">
              {ioDetails.builtInMicrophones ? "Yes" : "No"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Media/Memory Card Slot</TableCell>
            <TableCell className="text-right">
              {ioDetails.mediaMemoryCardSlot}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

const ProcessorDetails = ({
  processorDetails,
}: {
  processorDetails: ProcessorDetails;
}) => {
  return (
    <div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Processor</TableCell>
            <TableCell className="text-right">
              {processorDetails.processor}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>CPU</TableCell>
            <TableCell className="text-right">{processorDetails.cpu}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>L3 Cache</TableCell>
            <TableCell className="text-right">
              {processorDetails.l3Cache}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Graphics Type</TableCell>
            <TableCell className="text-right">
              {processorDetails.graphicsType}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>GPU</TableCell>
            <TableCell className="text-right">{processorDetails.gpu}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Memory Type</TableCell>
            <TableCell className="text-right">
              {processorDetails.memoryType}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total Installed Memory</TableCell>
            <TableCell className="text-right">
              {processorDetails.totalInstalledMemory}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Memory Configuration</TableCell>
            <TableCell className="text-right">
              {processorDetails.memoryConfiguration}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Memory Slot Type</TableCell>
            <TableCell className="text-right">
              {processorDetails.memorySlotType}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Memory Slots</TableCell>
            <TableCell className="text-right">
              {processorDetails.memorySlots}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>ECC Memory</TableCell>
            <TableCell className="text-right">
              {processorDetails.eccMemory ? "Yes" : "No"}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
