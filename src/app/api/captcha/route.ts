// src/app/api/captcha/route.ts
import { NextResponse } from 'next/server';
import { createCanvas, loadImage } from 'canvas';

export async function GET() {
  // Genera un texto aleatorio
  const captchaText = Math.random().toString(36).substring(2, 7);

  // Crea un lienzo para el captcha
  const canvas = createCanvas(100, 40);
  const ctx = canvas.getContext('2d');

  // Establece el fondo del captcha
  ctx.fillStyle = '#ccf2ff';
  ctx.fillRect(0, 0, 100, 40);

  // Configura el texto del captcha
  ctx.font = '20px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText(captchaText, 10, 30);

  // Convierte el lienzo a una imagen PNG
  const captchaImage = canvas.toDataURL();

  // Devuelve la imagen del captcha y el texto
  return NextResponse.json({
    data: captchaImage,
    text: captchaText,
  });
}