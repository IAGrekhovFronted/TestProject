import { Meta, moduleMetadata } from '@storybook/angular';
import { CustomButtonComponent } from './custom-button.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'Custom/Button',
  component: CustomButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
  tags: ['autodocs'],
} satisfies Meta<CustomButtonComponent>;

export const Primary = {
  args:{
    label:'Primary Button',
    isPrimary:false,
  },
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
    isPrimary: false,
  },
};
