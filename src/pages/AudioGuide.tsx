import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Play, Volume2, Mic, Languages } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

const AudioGuide = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [text, setText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");
  const [transcription, setTranscription] = useState("");
  const [translation, setTranslation] = useState("");

  const handleGenerateAudio = async () => {
    if (!text.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text first",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('text-to-speech', {
        body: { text }
      });

      if (error) throw error;

      setAudioUrl(data.audioUrl);
      toast({
        title: "Success",
        description: "Audio generated successfully!"
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to generate audio",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleTranscribe = async (file: File) => {
    setIsTranscribing(true);
    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Audio = reader.result?.toString().split(',')[1];
        
        const { data, error } = await supabase.functions.invoke('transcribe-audio', {
          body: { audio: base64Audio }
        });

        if (error) throw error;

        setTranscription(data.text);
        toast({
          title: "Success",
          description: "Audio transcribed successfully!"
        });
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to transcribe audio",
        variant: "destructive"
      });
    } finally {
      setIsTranscribing(false);
    }
  };

  const handleTranslate = async (targetLang: string) => {
    if (!text.trim()) {
      toast({
        title: "Error",
        description: "Please enter text to translate",
        variant: "destructive"
      });
      return;
    }

    setIsTranslating(true);
    try {
      const { data, error } = await supabase.functions.invoke('translate-text', {
        body: { text, targetLanguage: targetLang }
      });

      if (error) throw error;

      setTranslation(data.translatedText);
      toast({
        title: "Success",
        description: "Text translated successfully!"
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to translate text",
        variant: "destructive"
      });
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Volume2 className="w-12 h-12 text-primary mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold font-poppins">
                Smart <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Audio Guide</span>
              </h1>
            </div>
            <p className="text-lg font-inter text-foreground/70 max-w-2xl mx-auto">
              AI-powered text-to-speech, transcription, and translation for Indian heritage
            </p>
          </div>

          <div className="space-y-8">
            {/* Text to Speech */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-poppins">
                  <Play className="w-5 h-5" />
                  Text to Speech
                </CardTitle>
                <CardDescription className="font-inter">
                  Convert text into natural-sounding audio
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Enter text to convert to speech..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="min-h-32 font-inter"
                />
                <Button 
                  onClick={handleGenerateAudio} 
                  disabled={isGenerating}
                  className="w-full"
                >
                  {isGenerating ? "Generating..." : "Generate Audio"}
                </Button>
                {audioUrl && (
                  <audio controls className="w-full mt-4">
                    <source src={audioUrl} type="audio/mpeg" />
                  </audio>
                )}
              </CardContent>
            </Card>

            {/* Speech to Text */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-poppins">
                  <Mic className="w-5 h-5" />
                  Speech to Text
                </CardTitle>
                <CardDescription className="font-inter">
                  Transcribe audio to text
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <input
                  type="file"
                  accept="audio/*"
                  onChange={(e) => e.target.files?.[0] && handleTranscribe(e.target.files[0])}
                  className="w-full font-inter"
                />
                {isTranscribing && <p className="text-sm text-muted-foreground">Transcribing...</p>}
                {transcription && (
                  <div className="p-4 bg-muted rounded-md">
                    <p className="font-inter">{transcription}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Translation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-poppins">
                  <Languages className="w-5 h-5" />
                  Translation
                </CardTitle>
                <CardDescription className="font-inter">
                  Translate text between languages
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Button 
                    onClick={() => handleTranslate('hi')} 
                    disabled={isTranslating}
                    variant="outline"
                  >
                    Hindi
                  </Button>
                  <Button 
                    onClick={() => handleTranslate('ta')} 
                    disabled={isTranslating}
                    variant="outline"
                  >
                    Tamil
                  </Button>
                  <Button 
                    onClick={() => handleTranslate('te')} 
                    disabled={isTranslating}
                    variant="outline"
                  >
                    Telugu
                  </Button>
                  <Button 
                    onClick={() => handleTranslate('bn')} 
                    disabled={isTranslating}
                    variant="outline"
                  >
                    Bengali
                  </Button>
                </div>
                {translation && (
                  <div className="p-4 bg-muted rounded-md">
                    <p className="font-inter">{translation}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 mt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-hero rounded-md flex items-center justify-center">
              <span className="text-background font-bold font-poppins text-lg">भ</span>
            </div>
            <h3 className="text-2xl font-bold font-poppins">{t('hero.title')}</h3>
          </div>
          <p className="font-inter text-background/80 mb-6">
            {t('footer.tagline')}
          </p>
          <div className="text-sm font-inter text-background/60">
            © 2025 The Eternal Bharat. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AudioGuide;
