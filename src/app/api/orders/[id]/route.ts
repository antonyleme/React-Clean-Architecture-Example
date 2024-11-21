import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  const data = {
    id,
    name: "Hipercalórico 1kg",
    quantity: 1,
    price: 78.9,
    deliveryPrice: 0,
    img: "https://images-americanas.b2w.io/produtos/5143534325/imagens/hiper-calorico-suplemento-ganho-de-massa-treino-1kg-growth/5143534325_1_large.jpg",
  };

  return NextResponse.json(data, { status: 200 });
}
