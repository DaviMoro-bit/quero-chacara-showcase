import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

const ListingHeader = () => {
  return (
    <div className="bg-background py-6 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-foreground">
                Espaço Gold Eventos
              </h1>
              <Badge className="bg-success text-success-foreground">
                Aberto
              </Badge>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground mb-3">
              <MapPin className="w-4 h-4" />
              <span>Hortolândia, São Paulo</span>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8h - 23h</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(19) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contato@espacogold.com.br</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-right">
              <div className="text-sm text-muted-foreground">A partir de</div>
              <div className="text-3xl font-bold text-primary">R$ 2.500</div>
              <div className="text-sm text-muted-foreground">por diária</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingHeader;
