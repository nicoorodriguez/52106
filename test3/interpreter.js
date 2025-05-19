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
  // Obtener el texto de la cadena con comillas y espacios internos
  const texto = ctx.CADENA().getText(); // Ejemplo: "\"hola mundo\""
  const sinComillas = texto.substring(1, texto.length - 1); // Conserva espacios internos
  console.log(sinComillas);
}

function evaluarExpresion(ctx, parser) {
  return evaluarConstante(ctx.constante(), parser);
}

function evaluarConstante(ctx) {
  if (ctx.CADENA()) {
    // Conserva los espacios internos
    return ctx.CADENA().getText().substring(1, ctx.CADENA().getText().length - 1);
  } else if (ctx.numero()) {
    return ctx.numero().getText();
  }
}

module.exports = {
  interpretar
};
