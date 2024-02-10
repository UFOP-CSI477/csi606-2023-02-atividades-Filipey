import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/cardcomponents"

interface HomeCardProps {
  section: string
  href: string
}

export default function HomeCard({ section, href }: HomeCardProps) {
  return (
    <Card className="hover:cursor-pointer hover:border-black transition-all duration-200">
      <CardHeader>
        <CardTitle>{section}</CardTitle>
        <CardDescription>
          Esta seção é responsável pelo CRUD de {section}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Clique aqui para acessar o CRUD de {section}</p>
      </CardContent>
    </Card>
  )
}
