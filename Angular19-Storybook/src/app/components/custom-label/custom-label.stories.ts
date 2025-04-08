import { Meta, moduleMetadata } from '@storybook/angular';
import { CustomLabelComponent } from './custom-label.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'Custom/Label',
  component: CustomLabelComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
  tags: ['autodocs'],
} satisfies Meta<CustomLabelComponent>;

export const Primary = {
  args: {
    label: 'Primary',
  },
};
