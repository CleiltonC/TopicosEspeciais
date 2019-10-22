import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: "SexoPipe"
})
export class SexoPipe implements PipeTransform {
  transform(valor: string): string {
    return valor === "masculino" ? "M" : valor === "feminino" ? "F" : valor;
  }
}
