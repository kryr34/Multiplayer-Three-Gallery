import { Artwork } from '@/components/gameObjects/artwork';
import { useArtworkEditor } from './hooks/useArtworkEditor';
import { useState } from 'react';
import { Euler, Vector3 } from '@react-three/fiber';

export type ArtworkData = {
  url: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  pixelPerMeter?: number;
};

const artworks: ArtworkData[] = [
  {
    position: [-2.7, 1.6, 1.2],
    rotation: [0, 1.57, 0],
    scale: [0.8, 0.8, 1],
    url: '/artworks/瀑台雙鹿圖.jpg',
  },
  {
    position: [0.05, 1.5, -1.6],
    rotation: [0, 3.14, 0],
    scale: [1, 1, 1],
    url: '/artworks/奇妙之光.jpg',
  },
  {
    position: [2.575, 1.5, -1.6],
    rotation: [0, 3.14, 0],
    scale: [0.6, 0.6, 1],
    url: '/artworks/風雨生信心.jpg',
  },
  {
    position: [4.85, 1.5, -1.6],
    rotation: [0, 3.14, 0],
    scale: [0.6, 0.6, 1],
    url: '/artworks/雨過碧山.jpg',
  },
  {
    position: [7.075, 1.5, -1.6],
    rotation: [0, 3.14, 0],
    scale: [0.8, 0.8, 0.8],
    url: '/artworks/風景.jpg',
  },
  {
    position: [9.55, 1.5, -1.6],
    rotation: [0, 3.14, 0],
    scale: [0.8, 0.8, 0.8],
    url: '/artworks/有教堂的淡水風光.jpg',
  },
  {
    position: [13.475, 1.475, -4.225],
    rotation: [0, -1.555, 0],
    scale: [1, 1, 1],
    url: '/artworks/雙鳥棲松林.jpg',
  },
  {
    position: [13.475, 1.475, -6.65],
    rotation: [0, -1.555, 0],
    scale: [1.1, 1.1, 1],
    url: '/artworks/太平鳥.jpg',
  },
  {
    position: [13.78, 1.475, -3.595],
    rotation: [0, 1.575, 0],
    scale: [0.5, 0.5, 1],
    url: '/artworks/四季運作_冬.jpg',
  },
  {
    position: [13.78, 1.475, -4.85],
    rotation: [0, 1.575, 0],
    scale: [0.5, 0.5, 1],
    url: '/artworks/四季運作_秋.jpg',
  },
  {
    position: [13.78, 1.475, -6.1],
    rotation: [0, 1.575, 0],
    scale: [0.5, 0.5, 1],
    url: '/artworks/四季運作_夏.jpg',
  },
  {
    position: [13.78, 1.475, -7.4],
    rotation: [0, 1.575, 0],
    scale: [0.5, 0.5, 1],
    url: '/artworks/四季運作_春.jpg',
  },
];

export const Artworks = () => {
  return (
    <group>
      {artworks.map((artwork, index) => {
        return (
          <Artwork
            key={index}
            url={artwork.url}
            position={artwork.position}
            rotation={artwork.rotation}
            scale={artwork.scale}
            pixelPerMeter={artwork.pixelPerMeter}
          />
        );
      })}
    </group>
  );
};
