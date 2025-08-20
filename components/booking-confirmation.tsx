"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Calendar,
  Users,
  Plane,
  Ship,
  CheckCircle,
  Clock,
  Star,
  Heart,
  Download,
  Share2,
  Bot,
  Zap,
  Globe,
  Compass,
  Waves,
  Home,
  DollarSign,
  Shield,
  MessageSquare,
  TrendingUp,
} from "lucide-react"

export function BookingConfirmation() {
  const [isConfirmed, setIsConfirmed] = useState(false)

  const handleConfirmBooking = () => {
    setIsConfirmed(true)
  }

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-emerald-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-12 h-12 rounded-full island-gradient flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-primary">IslandTrip</span>
              </div>
            </div>

            <div className="success-pulse mb-6">
              <CheckCircle className="w-20 h-20 text-emerald-500 mx-auto mb-4" />
            </div>

            <h1 className="text-4xl font-bold text-foreground mb-4">Booking Confirmed! 🇵🇭</h1>

            <p className="text-xl text-muted-foreground mb-8">
              Your budget-friendly Philippines island adventure is all set. Get ready for an authentic tropical escape!
            </p>

            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg island-gradient flex items-center justify-center shadow-md">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold">AI-Generated Booking Reference</h3>
                    <p className="text-2xl font-mono font-bold text-primary">IT-PH-2024-456</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Confirmation sent to:</span>
                    <p className="font-medium">traveler@email.com</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Total paid:</span>
                    <p className="font-bold text-lg text-emerald-600">$899</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 justify-center mb-8">
              <Button variant="outline" className="gap-2 bg-white/80 backdrop-blur-sm hover:bg-white">
                <Download className="w-4 h-4" />
                Download Itinerary
              </Button>
              <Button variant="outline" className="gap-2 bg-white/80 backdrop-blur-sm hover:bg-white">
                <Share2 className="w-4 h-4" />
                Share Trip
              </Button>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Bot className="w-5 h-5 text-primary" />
                <span className="font-medium text-primary">AI Travel Assistant Active</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your AI assistant will send real-time updates about weather, ferry schedules, and local recommendations
                as your trip approaches.
              </p>
            </div>

            <p className="text-sm text-muted-foreground">
              We'll send you updates and travel tips as your departure date approaches.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-emerald-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full island-gradient flex items-center justify-center shadow-md">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-primary">IslandTrip</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="gap-2">
                <MessageSquare className="w-4 h-4" />
                Support
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Compass className="w-4 h-4" />
                My Trips
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium shadow-sm">
                  ✓
                </div>
                <span className="text-sm font-medium">Search</span>
              </div>
              <div className="w-8 h-px bg-primary"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium shadow-sm">
                  ✓
                </div>
                <span className="text-sm font-medium">Customize</span>
              </div>
              <div className="w-8 h-px bg-primary"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium shadow-sm">
                  3
                </div>
                <span className="text-sm font-medium text-primary">Confirm</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* AI Search Query Display */}
              <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary" />
                        Your AI Search Query
                      </h3>
                      <div className="bg-white/60 rounded-lg p-3 border border-primary/10">
                        <p className="text-sm font-medium text-primary">
                          "Plan a budget-friendly island trip in the Philippines with ferry routes and homestays"
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        AI processed 2,847 data points to create your perfect itinerary
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trip Overview */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg island-gradient flex items-center justify-center shadow-md">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Budget Philippines Island Adventure</CardTitle>
                      <p className="text-muted-foreground">AI-curated for authentic local experiences</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Trip Details */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Palawan & Bohol</p>
                        <p className="text-sm text-muted-foreground">Philippines</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">8 Days, 7 Nights</p>
                        <p className="text-sm text-muted-foreground">March 15-22</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">2 Travelers</p>
                        <p className="text-sm text-muted-foreground">Budget-friendly</p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      AI-Optimized Itinerary
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          icon: Plane,
                          title: "Manila to Puerto Princesa",
                          desc: "Budget flight + airport transfer to homestay",
                          day: "Day 1",
                          price: "$85",
                        },
                        {
                          icon: Home,
                          title: "Palawan Homestay Experience",
                          desc: "3 nights with local family in El Nido area",
                          day: "Day 2-4",
                          price: "$120",
                        },
                        {
                          icon: Ship,
                          title: "Ferry to Coron",
                          desc: "Scenic ferry route + island hopping tour",
                          day: "Day 3",
                          price: "$45",
                        },
                        {
                          icon: Waves,
                          title: "Underground River Tour",
                          desc: "UNESCO World Heritage site exploration",
                          day: "Day 4",
                          price: "$35",
                        },
                        {
                          icon: Ship,
                          title: "Ferry to Bohol",
                          desc: "Overnight ferry + Chocolate Hills tour",
                          day: "Day 5-6",
                          price: "$65",
                        },
                        {
                          icon: Home,
                          title: "Bohol Countryside Homestay",
                          desc: "2 nights with local family + tarsier sanctuary",
                          day: "Day 6-7",
                          price: "$80",
                        },
                        {
                          icon: Plane,
                          title: "Return to Manila",
                          desc: "Domestic flight + departure",
                          day: "Day 8",
                          price: "$75",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <div className="flex items-center gap-2">
                                <h4 className="font-medium">{item.title}</h4>
                                <Badge variant="secondary" className="text-xs">
                                  {item.day}
                                </Badge>
                              </div>
                              <span className="text-sm font-semibold text-emerald-600">{item.price}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Bot className="w-5 h-5 text-primary" />
                      <span className="font-medium text-primary">AI Personalization Features</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-500" />
                        <span>Real-time price optimization</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Waves className="w-4 h-4 text-blue-500" />
                        <span>Ferry schedule monitoring</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Home className="w-4 h-4 text-orange-500" />
                        <span>Verified homestay matching</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-purple-500" />
                        <span>24/7 AI travel assistant</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      Our AI analyzed your budget preferences and matched you with authentic local experiences,
                      optimized ferry routes, and verified homestays for the best value.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* What's Included */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    What's Included
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Domestic flights (Manila-Palawan-Bohol)",
                      "All ferry transfers between islands",
                      "7 nights homestay accommodation",
                      "Daily breakfast with host families",
                      "Underground River tour & permits",
                      "Island hopping boat tours",
                      "Chocolate Hills entrance & guide",
                      "AI travel assistant & support",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Summary Sidebar */}
            <div className="space-y-6">
              {/* Price Summary */}
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-emerald-500" />
                    Budget Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Homestay accommodation (7 nights)</span>
                      <span className="text-emerald-600">$200</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domestic flights</span>
                      <span className="text-emerald-600">$160</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ferry transfers</span>
                      <span className="text-emerald-600">$110</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tours & activities</span>
                      <span className="text-emerald-600">$120</span>
                    </div>
                    <div className="flex justify-between">
                      <span>AI planning & support</span>
                      <span className="text-emerald-600">$49</span>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Service fee</span>
                      <span>$60</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span className="text-emerald-600">$899</span>
                    </div>
                    <div className="text-xs text-center text-muted-foreground bg-emerald-50 p-2 rounded">
                      💰 You saved $1,200+ with AI optimization!
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={handleConfirmBooking}
                      className="w-full h-12 text-lg island-gradient hover:opacity-90 transition-opacity shadow-md"
                    >
                      <Bot className="w-5 h-5 mr-2" />
                      Confirm AI-Optimized Trip
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      Free cancellation up to 48 hours before departure
                    </p>
                  </div>

                  {/* Trust Indicators */}
                  <div className="pt-4 border-t space-y-3">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm">4.8/5 from 1,247 budget travelers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span className="text-sm">95% recommend our homestays</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm">Secure payment & AI protection</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
