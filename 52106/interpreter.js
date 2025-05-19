function interpretar(tree, parser) {
  ejecutarPrograma(tree, parser);
}


function ejecutarPrograma(ctx, parser) {
  for (const instruccion of ctx.instruccion()) {
    if (ejecutarInstruccion(instruccion, parser) === 'salir') {
      break;
    }
  }
}


function ejecutarInstruccion(ctx, parser) {
  const seleccion = ctx.seleccion();
  return ejecutarSeleccion(seleccion, parser);
}


function ejecutarSeleccion(ctx, parser) {
  const valorExpr = evaluarExpresion(ctx.expresion(), parser);
  let seEjecutoCaso = false;


  for (const casoCtx of ctx.caso()) {
    const valorCaso = evaluarConstante(casoCtx.constante(), parser);
    if (valorExpr === valorCaso) {
      for (const sentenciaCtx of casoCtx.sentencia()) {
        const res = ejecutarSentencia(sentenciaCtx, parser);
        if (res === 'salir') return 'salir';
      }
      seEjecutoCaso = true;
      break;
    }
  }


  if (!seEjecutoCaso && ctx.caso_defecto()) {
    for (const sentenciaCtx of ctx.caso_defecto().sentencia()) {
      const res = ejecutarSentencia(sentenciaCtx, parser);
      if (res === 'salir') return 'salir';
    }
  }
}


function ejecutarSentencia(ctx, parser) {
  if (ctx.salida().length > 0) {
    for (const salidaCtx of ctx.salida()) {
      ejecutarSalida(salidaCtx);
    }
  } else if (ctx.terminar()) {
    return 'salir';
  }
}


function ejecutarSalida(ctx) {
  const texto = ctx.cadena().getText(); // Incluye comillas
  const sinComillas = texto.slice(1, -1);
  console.log(sinComillas);
}


function evaluarExpresion(ctx, parser) {
  return evaluarConstante(ctx.constante(), parser);
}


function evaluarConstante(ctx, parser) {
  if (ctx.cadena()) {
    return ctx.cadena().getText().slice(1, -1); // Quitar comillas
  } else if (ctx.numero()) {
    return ctx.numero().getText();
  }
}


module.exports = {
  interpretar
};
