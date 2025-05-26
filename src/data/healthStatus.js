// src/data/healthStatus.js
export const anatomyItems = [
  {
    id: 1,
    key: 'Teeth',
    label: 'Healthy teeth',
    x: '52%',
    y: '28%',
    color: 'var(--primary-blue)',
    icon: '/assets/teeth-icon.png'
  },
  {
    id: 2,
    key: 'Lungs',
    label: 'Healthy Lungs',
    x: '48%',
    y: '40%',
    color: 'var(--green)',
    icon: '/assets/lungs-icon.svg'
  },
  {
    id: 3,
    key: 'Heart',
    label: 'Healthy Heart',
    x: '50%',
    y: '58%',
    color: 'var(--orange)',
    icon: '/assets/heart-icon.svg'
  },
  {
    id: 4,
    key: 'Bone',
    label: 'Healthy Bone',
    x: '47%',
    y: '70%',
    color: 'var(--bone-color)',    // updated to use bone-color
    icon: '/assets/bone-icon.svg'
  }
];

export const statusCards = [
  { id: 1, title: 'Lungs', date: '26 Oct 2021', progress: 70, color: 'var(--green)' },
  { id: 2, title: 'Teeth', date: '26 Oct 2021', progress: 30, color: 'var(--orange)' },
  { id: 3, title: 'Bone',  date: '26 Oct 2021', progress: 50, color: 'var(--bone-color)' }
];
