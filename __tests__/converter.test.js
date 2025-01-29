import {describe, it, expect, test} from 'vitest';
import {celsiusToFahrenheit, fahrenheitToCelsius} from '../src/converter';

describe('celsiusToFahrenheit tests', () => {
    // 0C should be 32°F
    it('Should convert 0C to 32°F', () => {
        expect(celsiusToFahrenheit(0)).toBe(32);
    });
    // 100C should be 212°F
    it('Should convert 100C to 212°F', () => {
        expect(celsiusToFahrenheit(100)).toBe(212);
    });
    // "25C should be 77°F"
    it('Should convert 25C to 77°F', () => {
        expect(celsiusToFahrenheit(25)).toBe(77);   
    });
    // -40C should be -40°F
    it('Should convert -40C to -40°F', () => {
        expect(celsiusToFahrenheit(-40)).toBe(-40);
    });
});

describe('fahrenheitToCelsius tests', () => {
    // 32°F should be 0°C
    it('Should convert 32°F to 0°C', () => {
        expect(fahrenheitToCelsius(32)).toBe(0);
    });
    // 212°F should be 100°C
    it('Should convert 212°F to 100°C', () => {
        expect(fahrenheitToCelsius(212)).toBe(100);
    });
    // 77°F should be 25°C
    it('Should convert 77°F to 25°C', () => {
        expect(fahrenheitToCelsius(77)).toBe(25);
    });
    // -40°F should be -40°C
    it('Should convert -40°F to -40°C', () => {
        expect(fahrenheitToCelsius(-40)).toBe(-40);
    });
    // "0°F should be 0°C"
    it('Should convert 0°F to 0°C', () => {
        expect(fahrenheitToCelsius(0)).toBe(0);
    });
    // "100°F should be 100°C"
    it('Should convert 100°F to 100°C', () => {
        expect(fahrenheitToCelsius(100)).toBe(100);
    });
});
