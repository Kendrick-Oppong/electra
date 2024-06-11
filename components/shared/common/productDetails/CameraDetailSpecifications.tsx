import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Camera } from "@/types";

const CameraDetailSpecifications = ({ product }: { product: Camera }) => {
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
              {product.display?.type}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Display Size</TableCell>
            <TableCell className="text-right">
              {product.display?.size}
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
            <TableCell>Color</TableCell>
            <TableCell className="text-right">
              {product.display.color}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dimensions</TableCell>
            <TableCell className="text-right">
              {`${product.display.dimensions.length} x ${product.display.dimensions.width} x ${product.display.dimensions.height}`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Surface Type</TableCell>
            <TableCell className="text-right">
              {product.display?.surfaceType}
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
            <TableCell>Lens Mount</TableCell>
            <TableCell className="text-right">
              {product.specifications.lensMount}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Aperture</TableCell>
            <TableCell className="text-right">
              {product.specifications.aperture}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Focal Length</TableCell>
            <TableCell className="text-right">
              {product.specifications.focalLength}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Sensor Type</TableCell>
            <TableCell className="text-right">
              {product.specifications.sensorType}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Megapixels</TableCell>
            <TableCell className="text-right">
              {product.specifications.megapixels}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Max Video Resolution</TableCell>
            <TableCell className="text-right">
              {product.specifications.maxVideoResolution}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Weight</TableCell>
            <TableCell className="text-right">
              {product.specifications.weight} lbs
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
          {product?.specifications.suppliedAccessories && product?.specifications.suppliedAccessories.map((accessory) => (
            <li key={accessory}>{accessory}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CameraDetailSpecifications;
