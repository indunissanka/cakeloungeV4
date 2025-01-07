import type { CakeDesign } from '../types/cake';

    export const generateEmailTemplate = (design: CakeDesign): string => {
      const tiers = design.tiers.map((tier, index) => {
        const colorBoxes = tier.colors.map(color => `<span style="display:inline-block;width:15px;height:15px;background-color:${color};border:1px solid black;margin-right:5px;"></span>`).join('');
        return `
          <tr>
            <td>${index + 1}</td>
            <td>${tier.layers}</td>
            <td>${colorBoxes}</td>
            <td><span style="display:inline-block;width:15px;height:15px;background-color:${tier.outerColor};border:1px solid black;"></span></td>
          </tr>
        `;
      }).join('');

      return `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #e91e63; border-bottom: 2px solid #e91e63; padding-bottom: 5px;">Cake Design Details</h2>
          <p><strong>Cake Shape:</strong> ${design.shape}</p>
          <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
            <thead style="background-color: #f8f8f8;">
              <tr>
                <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Tier</th>
                <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Layers</th>
                <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Colors</th>
                <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Outer Color</th>
              </tr>
            </thead>
            <tbody>
              ${tiers}
            </tbody>
          </table>
          <p><strong>Cake Flavor:</strong> ${design.flavor}</p>
          <p><strong>Frosting Type:</strong> ${design.frosting}</p>
          <p><strong>Message:</strong> ${design.message || 'No message'}</p>
        </div>
      `;
    };
