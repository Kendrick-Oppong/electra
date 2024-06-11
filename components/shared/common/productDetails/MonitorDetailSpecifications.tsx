import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Monitor } from "@/types";

const MonitorDetailSpecifications = ({ product }: { product: Monitor }) => {
  return (
    <div>
       <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>
      <h2 className="mb-3 font-bold text-primary">Display</h2>
    </AccordionTrigger>
    <AccordionContent>

     
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Display Type</TableCell>
            <TableCell className="text-right">
              {product.display?.panelType}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Resolution</TableCell>
            <TableCell className="text-right">
              {product.display?.resolution}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Refresh Rate</TableCell>
            <TableCell className="text-right">
              {product.display?.refreshRate}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>HDR Support</TableCell>
            <TableCell className="text-right">
              {product.display?.hdrSupport ? "Yes" : "No"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Color</TableCell>
            <TableCell className="text-right">
              {product.display?.color}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dimensions</TableCell>
            <TableCell className="text-right">
              {`${product.display?.dimensions?.length} x ${product.display?.dimensions?.width} x ${product.display?.dimensions?.height} inches`}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </AccordionContent>
  </AccordionItem>
</Accordion>
       <Accordion type="single" collapsible>
  <AccordionItem value="item-2">
    <AccordionTrigger>
      <h2 className="mb-3 font-bold text-primary">Specifications</h2>
    </AccordionTrigger>
    <AccordionContent>

     
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>HDMI Ports</TableCell>
            <TableCell className="text-right">
              {product.inputsOutputs?.hdmiPorts}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>USB Ports</TableCell>
            <TableCell className="text-right">
              {product.inputsOutputs?.usbPorts}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Ethernet Port</TableCell>
            <TableCell className="text-right">
              {product.inputsOutputs?.ethernetPort ? "Yes" : "No"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Other Ports</TableCell>
            <TableCell className="text-right">
              {product.inputsOutputs!.otherPorts!.join(", ")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Refresh Rate</TableCell>
            <TableCell className="text-right">
              {product.performance?.refreshRate}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Response Time</TableCell>
            <TableCell className="text-right">
              {product.performance?.responseTime}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Contrast Ratio</TableCell>
            <TableCell className="text-right">
              {product.performance?.contrastRatio}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Audio Output</TableCell>
            <TableCell className="text-right">
              {product.audio?.audioOutput}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Built-in Speakers</TableCell>
            <TableCell className="text-right">
              {product.audio?.builtInSpeakers ? "Yes" : "No"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Speaker Type</TableCell>
            <TableCell className="text-right">
              {product.audio?.speakerType}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>WiFi</TableCell>
            <TableCell className="text-right">
              {product.communications?.wifi}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bluetooth</TableCell>
            <TableCell className="text-right">
              {product.communications?.bluetooth}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Ethernet</TableCell>
            <TableCell className="text-right">
              {product.communications?.ethernet ? "Yes" : "No"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>RF Input</TableCell>
            <TableCell className="text-right">
              {product.communications?.rfInput ? "Yes" : "No"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Power Supply</TableCell>
            <TableCell className="text-right">
              {product.power?.powerSupply}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Power Consumption</TableCell>
            <TableCell className="text-right">
              {product.power?.powerConsumption}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>General Dimensions</TableCell>
            <TableCell className="text-right">
              {product.generalDetails?.dimensions}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Weight</TableCell>
            <TableCell className="text-right">
              {product.generalDetails?.weight} lbs
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Color</TableCell>
            <TableCell className="text-right">
              {product.generalDetails?.color}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Mounting</TableCell>
            <TableCell className="text-right">
              {product.generalDetails?.mounting}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
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

export default MonitorDetailSpecifications;
