import { describe, it, expect } from 'vitest';
import { validarAnoFilme } from './util.js';

describe('Testes de Validação do Ano do Filme', () => {
    it('deve aceitar um ano válido dentro do intervalo', () => {
      expect(validarAnoFilme(2014)).toBe(true);
    });
  
    it('deve rejeitar anos anteriores ao surgimento do cinema (antes de 1888)', () => {
      expect(validarAnoFilme(1800)).toBe(false);
    });
  
    it('deve rejeitar anos anteriores ao surgimento do cinema  verdadeiro (antes de 1888)', () => {
      expect(validarAnoFilme(1800)).toBe(true);
    });
  });