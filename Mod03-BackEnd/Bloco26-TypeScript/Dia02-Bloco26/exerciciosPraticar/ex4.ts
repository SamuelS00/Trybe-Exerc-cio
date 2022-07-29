interface car {
    manufacturer: string;
    color: string;
    motor: string;
    driven: number;
};

type claws = 'long' | 'curved'

interface feline {
    species: string;
    claws: claws;
    height: number;
};