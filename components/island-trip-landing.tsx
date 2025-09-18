"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Search,
  MapPin,
  Plane,
  Ship,
  Home,
  Crown,
  Star,
  Heart,
  Waves,
  Mountain,
  Sparkles,
  Coffee,
  Leaf,
  Phone,
  Mail,
  Navigation,
  Users,
  Globe,
  Loader2,
  ChevronDown,
  X,
} from "lucide-react"

export function IslandTripLanding() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState("USD")
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false)
  const [showFerryTracker, setShowFerryTracker] = useState(false)

  const currencies = [
    { code: "USD", symbol: "$", name: "US Dollar" },
    { code: "EUR", symbol: "€", name: "Euro" },
    { code: "GBP", symbol: "£", name: "British Pound" },
    { code: "INR", symbol: "₹", name: "Indian Rupee" },
    { code: "AUD", symbol: "A$", name: "Australian Dollar" },
  ]

  const ferryRoutes = [
    {
      route: "Port Blair → Havelock",
      departure: "06:30 AM",
      arrival: "08:15 AM",
      status: "On Time",
      price: "$25",
    },
    {
      route: "Havelock → Neil Island",
      departure: "10:30 AM",
      arrival: "11:45 AM",
      status: "Delayed 15 min",
      price: "$18",
    },
    {
      route: "Neil Island → Port Blair",
      departure: "03:30 PM",
      arrival: "05:45 PM",
      status: "On Time",
      price: "$22",
    },
  ]

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        setShowResults(true)
      }, 3000)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setShowResults(true)
    }, 3000)
  }

  const destinations = [
    {
      id: 1,
      name: "Andaman Islands Paradise",
      location: "India • 3 Islands",
      duration: "8 nights",
      price: 1299,
      rating: 4.9,
      reviews: 521,
      match: 98,
      category: "Adventure & Culture",
      image: "/andaman-islands-paradise.png",
      highlights: ["Cellular Jail history tour", "Radhanagar Beach sunset", "Scuba diving at Havelock"],
    },
    {
      id: 2,
      name: "Neil Island Explorer",
      location: "Andaman • Neil Island",
      duration: "5 nights",
      price: 875,
      rating: 4.8,
      reviews: 306,
      match: 96,
      category: "Nature & Relaxation",
      image: "/neil-island-explorer.png",
      highlights: ["Natural rock formations", "Coral reef snorkeling", "Local fishing village"],
    },
    {
      id: 3,
      name: "Port Blair Heritage",
      location: "Andaman • Port Blair",
      duration: "4 nights",
      price: 725,
      rating: 4.7,
      reviews: 277,
      match: 94,
      category: "History & Culture",
      image: "/port-blair-heritage.png",
      highlights: ["Ross Island ruins", "Anthropological museum", "Corbyn's Cove beach"],
    },
  ]

  const FerryTrackerModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center">
              <Ship className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Ferry Tracker</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowFerryTracker(false)}
            className="text-slate-500 hover:text-slate-700"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6">
          <p className="text-slate-600 mb-6">Real-time ferry schedules and tracking for Andaman Islands</p>

          <div className="space-y-4">
            {ferryRoutes.map((ferry, index) => (
              <Card key={index} className="border border-slate-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                        <Navigation className="w-4 h-4 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{ferry.route}</h3>
                        <p className="text-sm text-slate-600">
                          {ferry.departure} → {ferry.arrival}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-slate-900">{ferry.price}</div>
                      <Badge
                        className={
                          ferry.status.includes("Delayed")
                            ? "bg-orange-100 text-orange-700"
                            : "bg-green-100 text-green-700"
                        }
                      >
                        {ferry.status}
                      </Badge>
                    </div>
                  </div>
                  <Button size="sm" className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-24 h-24 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Loader2 className="w-12 h-12 text-white animate-spin" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center animate-pulse">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">AI is crafting your perfect escape...</h2>
          <p className="text-slate-600 mb-6 max-w-md mx-auto">
            Analyzing {searchQuery ? `"${searchQuery}"` : "your preferences"} across 1000+ islands, ferry routes, and
            local experiences
          </p>
          <div className="flex justify-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              <span>Checking ferry schedules</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span>Finding local gems</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span>Optimizing routes</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-800">IslandTrip</span>
            </div>
          </div>

          {/* AI Results Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-teal-600" />
              </div>
              <Badge className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-1">AI Curated Results</Badge>
            </div>
            <h1 className="text-4xl font-bold text-slate-800 mb-2">Perfect Island Escapes Await ✨</h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Based on <span className="text-teal-600 font-semibold">"{searchQuery}"</span>, I've discovered 3
              extraordinary experiences with ferry routes and authentic local culture. Each destination is handpicked
              with real-time insights and local expertise.
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {destinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-teal-500 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      {destination.match}% Match
                    </Badge>
                  </div>
                  <Button size="icon" variant="ghost" className="absolute top-4 right-4 bg-white/80 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <div className="absolute bottom-4 right-4 bg-white rounded-lg px-3 py-2 shadow-lg">
                    <div className="text-2xl font-bold text-slate-800">{`${selectedCurrency}${destination.price.toLocaleString()}`}</div>
                    <div className="text-sm text-slate-600">per person</div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{destination.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-600 mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {destination.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Crown className="w-4 h-4" />
                        {destination.duration}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{destination.rating}</span>
                        <span className="text-slate-500">({destination.reviews} reviews)</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="mb-4">
                      {destination.category}
                    </Badge>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-teal-600" />
                      <span className="font-semibold text-slate-800">Trip Highlights</span>
                    </div>
                    <ul className="space-y-1">
                      {destination.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Back to Search */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              onClick={() => setShowResults(false)}
              className="border-teal-200 text-teal-600 hover:bg-teal-50"
            >
              ← New Search
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="w-full bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-800">IslandTrip</span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <Button
                variant="ghost"
                className="text-slate-600 hover:text-teal-600"
                onClick={() => setShowFerryTracker(true)}
              >
                <Ship className="w-4 h-4 mr-2" />
                Ferry Tracker
              </Button>
              <Button variant="ghost" className="text-slate-600 hover:text-teal-600">
                <Navigation className="w-4 h-4 mr-2" />
                Routes
              </Button>
              <Button variant="ghost" className="text-slate-600 hover:text-teal-600">
                My Trips
              </Button>

              <div className="relative">
                <Button
                  variant="ghost"
                  className="text-slate-600 hover:text-teal-600 flex items-center gap-2"
                  onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                >
                  <Globe className="w-4 h-4" />
                  {selectedCurrency}
                  <ChevronDown className="w-3 h-3" />
                </Button>

                {showCurrencyDropdown && (
                  <div className="absolute top-full right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-lg py-2 min-w-[160px] z-50">
                    {currencies.map((currency) => (
                      <button
                        key={currency.code}
                        className="w-full px-4 py-2 text-left hover:bg-slate-50 flex items-center justify-between"
                        onClick={() => {
                          setSelectedCurrency(currency.code)
                          setShowCurrencyDropdown(false)
                        }}
                      >
                        <span className="text-slate-700">{currency.code}</span>
                        <span className="text-slate-500 text-sm">{currency.symbol}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Button variant="outline" className="border-teal-200 text-teal-600 hover:bg-teal-50 bg-transparent">
                Sign In
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {showFerryTracker && <FerryTrackerModal />}

      <div className="container mx-auto px-6">
        <div className="text-center py-20">
          <p className="text-lg text-slate-600 mb-8 font-medium">
            The first AI-powered platform built exclusively for island travel
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Discover Your Perfect
            <br />
            <span className="text-teal-500">Island Escape</span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-16 leading-relaxed">
            We combine deep community insights with real-time data on flights, ferries, stays, and local gems to create
            fully personalized itineraries in seconds
          </p>

          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xl">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <Input
                    placeholder="Where's your next island escape? Ask me anything..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-12 text-base border-0 focus:ring-0 pl-12 pr-4 bg-slate-50 rounded-xl"
                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  />
                </div>
                <Button
                  onClick={handleSearch}
                  className="h-12 px-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Plan My Trip
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 mb-6">
                {[
                  { icon: Plane, label: "Flight" },
                  { icon: Ship, label: "Ship" },
                  { icon: Navigation, label: "Ferry" },
                  { icon: Home, label: "Itinerary" },
                  { icon: Crown, label: "Premium", premium: true },
                  { icon: Star, label: "Luxury", premium: true },
                ].map((item, index) => (
                  <div key={index} className="cursor-pointer group text-center relative">
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-teal-50 group-hover:scale-110 transition-all duration-300 mb-1">
                      <item.icon className="w-5 h-5 text-slate-600 group-hover:text-teal-600" />
                    </div>
                    {item.premium && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-2 h-2 text-yellow-800" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <Badge className="bg-purple-50 text-purple-700 border-purple-200 px-4 py-2 text-sm font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI-Powered Search
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Plan 5-day Maldives Trip",
              "Find Hidden Gems in Indonesia",
              "Andaman Islands adventure",
              "Wellness Retreats Bali",
            ].map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => handleSuggestionClick(suggestion)}
                className="border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-teal-300 hover:text-teal-700 rounded-full px-6 py-3 font-medium"
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>

        <div className="py-20" id="top-islands">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Top 10 Most Visited Islands Worldwide</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Discover the world's most beloved island destinations, each offering unique experiences and
                unforgettable memories
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  rank: 1,
                  name: "Bali, Indonesia",
                  visitors: "6.3M annually",
                  desc: "The Island of Gods blends ancient temples with vibrant rice terraces and world-class beaches",
                  image: "/bali-rice-terraces-temples.png",
                  highlights: ["Ubud rice terraces", "Ancient temples", "Volcanic landscapes"],
                },
                {
                  rank: 2,
                  name: "Maldives",
                  visitors: "1.9M annually",
                  desc: "1,192 coral islands scattered across crystal-clear lagoons in the Indian Ocean",
                  image: "/maldives-coral-islands.png",
                  highlights: ["Overwater villas", "World-class diving", "Private island resorts"],
                },
                {
                  rank: 3,
                  name: "Seychelles",
                  visitors: "384K annually",
                  desc: "115 pristine islands with granite boulders, white sand beaches, and rare wildlife",
                  image: "/seychelles-beach.png",
                  highlights: ["Granite rock formations", "Rare bird species", "Pristine beaches"],
                },
                {
                  rank: 4,
                  name: "Hawaii, USA",
                  visitors: "10.4M annually",
                  desc: "Eight volcanic islands offering everything from active volcanoes to world-famous surf breaks",
                  image: "/hawaii-volcanic-palms.png",
                  highlights: ["Active volcanoes", "World-class surfing", "Diverse ecosystems"],
                },
                {
                  rank: 5,
                  name: "Santorini, Greece",
                  visitors: "2M annually",
                  desc: "Iconic white-washed buildings perched on volcanic cliffs overlooking the Aegean Sea",
                  image: "/santorini-sunset.png",
                  highlights: ["Volcanic sunsets", "Wine tasting", "Cycladic architecture"],
                },
                {
                  rank: 6,
                  name: "Bahamas",
                  visitors: "7.2M annually",
                  desc: "700 islands and cays with some of the world's clearest waters and pink sand beaches",
                  image: "/bahamas-pink-beach.png",
                  highlights: ["Swimming pigs", "Blue holes", "Pink sand beaches"],
                },
              ].map((island, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 shadow-lg relative"
                >
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-teal-500 text-white font-bold">#{island.rank}</Badge>
                  </div>
                  <div className="relative h-64">
                    <img
                      src={island.image || "/placeholder.svg"}
                      alt={island.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-900">{island.name}</h3>
                      <div className="flex items-center gap-1 text-sm text-slate-600">
                        <Users className="w-4 h-4" />
                        {island.visitors}
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-4">{island.desc}</p>
                    <div className="space-y-2">
                      {island.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-50 py-20 -mx-6" id="destinations">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="bg-teal-100 text-teal-700 px-4 py-2 mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                Curated by AI & Local Experts
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Island Destinations That
                <span className="text-teal-500"> Captivate Hearts</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Discover why millions of travelers fall in love with these extraordinary islands. Each destination
                offers a unique blend of natural beauty, rich culture, and unforgettable experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {destinations.map((destination) => (
                <Card
                  key={destination.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative">
                    <img
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-teal-500 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        {destination.match}% Match
                      </Badge>
                    </div>
                    <Button size="icon" variant="ghost" className="absolute top-4 right-4 bg-white/80 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <div className="absolute bottom-4 right-4 bg-white rounded-lg px-3 py-2 shadow-lg">
                      <div className="text-2xl font-bold text-slate-800">{`${selectedCurrency}${destination.price.toLocaleString()}`}</div>
                      <div className="text-sm text-slate-600">per person</div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{destination.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-slate-600 mb-2">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {destination.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Crown className="w-4 h-4" />
                          {destination.duration}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{destination.rating}</span>
                          <span className="text-slate-500">({destination.reviews} reviews)</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="mb-4">
                        {destination.category}
                      </Badge>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-teal-600" />
                        <span className="font-semibold text-slate-800">Trip Highlights</span>
                      </div>
                      <ul className="space-y-1">
                        {destination.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">View Details</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Thrills & Tranquility</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Waves, label: "Scuba Diving", color: "text-blue-600" },
                { icon: Ship, label: "Glass-Bottom Boat", color: "text-cyan-600" },
                { icon: Mountain, label: "Jet Ski", color: "text-orange-600" },
                { icon: Star, label: "Sunset Cruise", color: "text-yellow-600" },
                { icon: Leaf, label: "Yoga Retreats", color: "text-green-600" },
                { icon: Coffee, label: "Beach Lounging", color: "text-amber-600" },
              ].map((activity, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-slate-100 transition-colors">
                    <activity.icon className={`w-8 h-8 ${activity.color}`} />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{activity.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-teal-500 py-20 -mx-6">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Where will your island journey begin?</h2>

            <div className="max-w-lg mx-auto mb-8">
              <div className="flex gap-4">
                <Input
                  placeholder="Describe your perfect island escape..."
                  className="bg-white border-0 h-14 rounded-2xl text-base"
                />
                <Button className="bg-white text-teal-600 hover:bg-slate-50 h-14 px-8 rounded-2xl font-semibold">
                  Plan My Trip
                </Button>
              </div>
            </div>

            <div className="flex justify-center gap-8 text-teal-100 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Real-time pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>Local partnerships</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span>AI-curated experiences</span>
              </div>
            </div>
          </div>
        </div>

        <footer className="py-16 bg-slate-50 -mx-6">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold text-slate-900">IslandTrip</span>
              </div>
              <p className="text-slate-600 max-w-md mx-auto mb-8">
                The first AI-powered platform built exclusively for island travel. Making dream island escapes
                effortless, authentic, and unforgettable.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <h4 className="font-semibold text-slate-900 mb-4">Contact Us</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2 text-slate-600">
                    <Phone className="w-4 h-4" />
                    <span>+91 9531891302</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-slate-600">
                    <Mail className="w-4 h-4" />
                    <span>contactislandtrip@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h4 className="font-semibold text-slate-900 mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-slate-600 hover:text-teal-600 transition-colors">
                    About Us
                  </a>
                  <a href="#" className="block text-slate-600 hover:text-teal-600 transition-colors">
                    How It Works
                  </a>
                  <a href="#" className="block text-slate-600 hover:text-teal-600 transition-colors">
                    Privacy Policy
                  </a>
                </div>
              </div>

              <div className="text-center">
                <h4 className="font-semibold text-slate-900 mb-4">Features</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-slate-600 hover:text-teal-600 transition-colors">
                    Ferry Tracker
                  </a>
                  <a href="https://www.myislandtrip.online" className="block text-slate-600 hover:text-teal-600 transition-colors">
                    Blogs
                  </a>
                  <a href="#" className="block text-slate-600 hover:text-teal-600 transition-colors">
                    Local Experiences
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-slate-200">
              <p className="text-slate-500 text-sm">
                © 2024 IslandTrip. All rights reserved. Transforming island travel with AI.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
