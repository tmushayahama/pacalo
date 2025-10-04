import { getAssetPath } from '../../../utils/assets'

export interface GalleryImage {
  src: string
  title: string
  description: string
  category: 'vehicle' | 'interior' | 'equipment'
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: getAssetPath('/assets/images/vans/side_view_van.jpg'),
    title: 'Professional Medical Transport Van',
    description: 'Our fully equipped medical transport vehicle designed for safe and comfortable patient transportation.',
    category: 'vehicle'
  },
  {
    src: getAssetPath('/assets/images/vans/van_side.jpg'),
    title: 'Side View of Transport Vehicle',
    description: 'Clean, professional appearance with easy access doors for wheelchair and stretcher loading.',
    category: 'vehicle'
  },
  {
    src: getAssetPath('/assets/images/vans/van_outside_house.png'),
    title: 'Home Pickup Service',
    description: 'We provide convenient door-to-door service, picking up patients directly from their homes.',
    category: 'vehicle'
  },
  {
    src: getAssetPath('/assets/images/vans/wheelchair_van.png'),
    title: 'Wheelchair Accessible Vehicle',
    description: 'Specially designed van with wheelchair lift and securement system for safe transport.',
    category: 'vehicle'
  },
  {
    src: getAssetPath('/assets/images/vans/inside_stretcher.png'),
    title: 'Spacious Interior Layout',
    description: 'Roomy interior designed for patient comfort with proper ventilation and lighting.',
    category: 'interior'
  },
  {
    src: getAssetPath('/assets/images/vans/loaded_stretcher.jpg'),
    title: 'Stretcher Transport Setup',
    description: 'Professional stretcher securement system ensuring patient safety during transport.',
    category: 'equipment'
  },
  {
    src: getAssetPath('/assets/images/vans/securement_system.jpg'),
    title: 'Advanced Securement System',
    description: 'State-of-the-art wheelchair and stretcher securement technology for maximum safety.',
    category: 'equipment'
  },
  {
    src: getAssetPath('/assets/images/vans/stretcher_can.jpg'),
    title: 'Medical Equipment Storage',
    description: 'Organized storage solutions for medical equipment and patient care supplies.',
    category: 'equipment'
  },
  {
    src: getAssetPath('/assets/images/car.jpg'),
    title: 'Ambulatory Transport Vehicle',
    description: 'Comfortable sedan for patients who can walk and sit normally during transport.',
    category: 'vehicle'
  },
  {
    src: getAssetPath('/assets/images/van.jpg'),
    title: 'Multi-Purpose Transport Van',
    description: 'Versatile vehicle suitable for various types of medical transportation needs.',
    category: 'vehicle'
  },
  {
    src: getAssetPath('/assets/images/stretcher.jpg'),
    title: 'Professional Stretcher Service',
    description: 'Specialized stretcher transport for patients requiring horizontal positioning.',
    category: 'equipment'
  }
]

export const GALLERY_CATEGORIES = [
  { key: 'vehicle', label: 'Our Vehicles', description: 'Professional transport vehicles' },
  { key: 'interior', label: 'Interior Features', description: 'Comfortable and safe interiors' },
  { key: 'equipment', label: 'Medical Equipment', description: 'Advanced safety and care equipment' }
] as const