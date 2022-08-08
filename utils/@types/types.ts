interface DestinationI {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

interface CrewI {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

interface TechI {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

export type { DestinationI, CrewI, TechI };
