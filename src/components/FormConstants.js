export const DefaultValues = {
  petName: '',
  type: 'dog',
  ageGroup: ' < 1',
  toppings: ['chicken'],
  notes: '',
  activities: [{ value: 'eat', label: 'Eat' }]
}

export const TypeOptions = [
  { value: 'dog', label: 'Dog' },
  { value: 'cat', label: 'Cat' },
  { value: 'bird', label: 'Bird' }
]

export const AgeOptions = [
  { value: '< 1', label: 'Less than 1 Year' },
  { value: '<= 5', label: '1 to 5 Years' },
  { value: '<= 10', label: '6 to 10 Years' },
  { value: 'old guy', label: 'More than 10 Years Old' }
]

export const ActivityOptions = [
  { value: 'eat', label: 'Eat' },
  { value: 'play', label: 'Play' },
  { value: 'party', label: 'Party' },
  { value: 'sleep', label: 'Sleep' }
]

export function isValidFieldName (name) {
  return name in DefaultValues;
}