import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTimemmss(seconds: number) {
  const secs = seconds % 60;
  return `0${Math.floor(seconds / 60)}:${secs < 10 ? '0' + secs : secs}`;
}

const CAR_NUMBERS = 20;
export function getRandomCar() {
  return Math.floor(Math.random() * (CAR_NUMBERS + 1))
}