"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { ControllerRenderProps } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  phone: z.string().min(10, { message: "Por favor, insira um número de celular válido." }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: ControllerRenderProps<FormValues, 'phone'>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{5})(\d{4})$/, "$1-$2");
    field.onChange(value);
  };

  function onSubmit(values: FormValues) {
    const text = `Olá! Meu nome é ${values.name}.
Celular: ${values.phone}
Email: ${values.email}
${values.message ? `Mensagem: ${values.message}` : ''}
Gostaria de ser contatado(a)!`;

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(text.trim())}`;
    
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Quase lá!",
      description: "Sua mensagem está pronta para ser enviada no WhatsApp.",
    });

    form.reset();
  }

  return (
    <section id="contato" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Pronto(a) para começar?
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg leading-8 text-foreground/80">
            Diga adeus à burocracia e contrate a melhor consultoria! Preencha o formulário abaixo e nossa equipe entrará em contato em breve.
          </p>
        </div>
        <div className="mx-auto max-w-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome Completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Celular</FormLabel>
                    <FormControl>
                      <Input placeholder="(XX) XXXXX-XXXX" {...field} onChange={(e) => handlePhoneInputChange(e, field)} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="seu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem Adicional (Opcional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Conte-nos um pouco sobre o que você precisa..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Quero Ser Contatado(a)!
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
