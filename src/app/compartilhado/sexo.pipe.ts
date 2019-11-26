import { PipeTransform, Pipe } from "@angular/core";


@Pipe({
  name: "SexoPipe"
})
export class SexoPipe implements PipeTransform {
  transform (valor: string): string {
    if (valor === "masculino")
      return "M";
    else if (valor === "feminino")
      return "F";
    else return valor;
  }
}
