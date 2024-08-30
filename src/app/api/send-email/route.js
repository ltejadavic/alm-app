import nodemailer from 'nodemailer';

export async function POST(request) {
  const { organization, fullName, email, message } = await request.json();

  // Configurar el transportador de Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Utilizar el servicio de Gmail; cambiar si usas otro servicio
    auth: {
      user: 'ruisukun05@gmail.com',
      pass: 'nzlv oyqz jubp avay'
    }
  });

  // Configurar el correo a enviar
  const mailOptions = {
    from: email,
    to: 'ventas@alm-tecnologia.com', // Correo del destinatario
    subject: `Mensaje de ${fullName}`,
    text: `Organización: ${organization}\nCorreo: ${email}\n\n${message}`
  };

  // Enviar el correo
  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al enviar el correo' }), { status: 500 });
  }
}