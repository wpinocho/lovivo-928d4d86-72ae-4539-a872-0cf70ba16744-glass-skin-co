import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Droplets, Shield, Star } from 'lucide-react';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * K-beauty skincare store with glass skin aesthetic
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    filteredProducts,
    handleViewCollectionProducts,
  } = logic;

  const spfProducts = filteredProducts.filter(p => 
    p.tags?.some(tag => tag.toLowerCase().includes('spf') || tag.toLowerCase().includes('sunscreen'))
  );

  const treatmentProducts = filteredProducts.filter(p => 
    p.tags?.some(tag => ['serum', 'treatment', 'essence'].includes(tag.toLowerCase()))
  );

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section - Glass Skin */}
      <section className="relative bg-gradient-to-br from-secondary via-background to-muted overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/hero-glass-skin.jpg')] bg-cover bg-center opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              <Sparkles className="h-3 w-3 mr-1" />
              Korean Beauty Innovation
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
              Achieve <span className="text-accent">Glass Skin</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary/80 mb-8 leading-relaxed">
              Discover the secret to luminous, translucent skin with our curated K-beauty collection. 
              Your journey to dewy, radiant perfection starts here.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                onClick={() => window.scrollTo({ top: document.getElementById('products')?.offsetTop || 0, behavior: 'smooth' })}
              >
                Shop Skincare
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
                onClick={() => window.scrollTo({ top: document.getElementById('collections')?.offsetTop || 0, behavior: 'smooth' })}
              >
                Find Your Routine
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary/50 rounded-full blur-3xl" />
      </section>

      {/* Skin Type Collections */}
      {!loadingCollections && collections.length > 0 && (
        <section id="collections" className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Shop By Skin Type
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find products perfectly matched to your skin's unique needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {collections.map((collection) => (
                <CollectionCard 
                  key={collection.id} 
                  collection={collection} 
                  onViewProducts={handleViewCollectionProducts} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Treatment Grid */}
      {treatmentProducts.length > 0 && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Targeted Treatments
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powerful serums and essences for your specific skin concerns
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {treatmentProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Routine Bundles */}
      <section className="py-16 bg-gradient-to-br from-secondary/50 via-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Complete Skincare Routines
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expertly curated bundles for your perfect K-beauty regimen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Morning Routine */}
            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mr-3">
                    <Sparkles className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Morning Glow</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Start your day with brightening, hydrating essentials for radiant glass skin
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-sm">Gentle cleanser</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-sm">Vitamin C serum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-sm">Hydrating essence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-sm">SPF protection</span>
                  </li>
                </ul>
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Bundle price</span>
                    <p className="text-2xl font-bold text-primary">$99</p>
                  </div>
                  <Badge variant="secondary" className="text-accent">Save 20%</Badge>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Build Routine
                </Button>
              </CardContent>
            </Card>

            {/* Evening Routine */}
            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mr-3">
                    <Droplets className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Night Repair</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Intensive overnight treatment for skin regeneration and deep hydration
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-sm">Double cleanse duo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-sm">Exfoliating toner</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-sm">Repair serum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-sm">Rich night cream</span>
                  </li>
                </ul>
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Bundle price</span>
                    <p className="text-2xl font-bold text-primary">$115</p>
                  </div>
                  <Badge variant="secondary" className="text-accent">Save 25%</Badge>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Build Routine
                </Button>
              </CardContent>
            </Card>

            {/* Complete Routine */}
            <Card className="border-2 border-accent hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-accent text-accent-foreground">
                  <Star className="h-3 w-3 mr-1" />
                  Best Value
                </Badge>
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mr-3">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Full Regimen</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Complete AM/PM routine for ultimate glass skin transformation
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-sm">Full morning routine</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-sm">Full evening routine</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-sm">Weekly mask treatment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-sm">Free skincare guide</span>
                  </li>
                </ul>
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Bundle price</span>
                    <p className="text-2xl font-bold text-primary">$189</p>
                  </div>
                  <Badge className="bg-accent text-accent-foreground">Save 30%</Badge>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Build Routine
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SPF Comparer */}
      {spfProducts.length > 0 && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent">
                <Shield className="h-3 w-3 mr-1" />
                Essential Protection
              </Badge>
              <h2 className="text-4xl font-bold text-primary mb-4">
                Compare SPF Products
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find your perfect daily sun protection for glass skin maintenance
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <div className="inline-flex gap-6 min-w-full pb-4">
                {spfProducts.map((product) => (
                  <Card key={product.id} className="min-w-[280px] flex-shrink-0 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
                        {product.images && product.images.length > 0 ? (
                          <img
                            src={product.images[0]}
                            alt={product.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                            <Shield className="h-12 w-12" />
                          </div>
                        )}
                      </div>
                      
                      <h3 className="font-semibold text-primary mb-2 line-clamp-2">
                        {product.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {product.description?.replace(/<[^>]*>/g, '')}
                      </p>
                      
                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Protection</span>
                          <span className="font-medium text-accent">
                            {product.title.includes('50') ? 'SPF 50+' : product.title.includes('45') ? 'SPF 45' : 'SPF 30'}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Finish</span>
                          <span className="font-medium">
                            {product.title.toLowerCase().includes('invisible') ? 'Invisible' : 
                             product.title.toLowerCase().includes('tone') ? 'Tone-up' : 'Natural'}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Type</span>
                          <span className="font-medium">
                            {product.title.toLowerCase().includes('mineral') ? 'Mineral' : 
                             product.title.toLowerCase().includes('gel') ? 'Gel' : 'Cream'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-2xl font-bold text-primary">
                          ${product.price?.toFixed(2)}
                        </span>
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Products Grid */}
      <section id="products" className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our most-loved K-beauty essentials for achieving that coveted glass skin glow
            </p>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-card rounded-lg h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No products available.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Glow?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands achieving radiant glass skin with our Korean beauty collection
          </p>
          <Button 
            size="lg" 
            className="bg-background text-primary hover:bg-background/90 px-12"
            onClick={() => window.scrollTo({ top: document.getElementById('products')?.offsetTop || 0, behavior: 'smooth' })}
          >
            Shop Skincare Now
          </Button>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  );
};
