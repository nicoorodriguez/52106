function traducir(tree, parser) {
  return traducirPrograma(tree, parser);
}

function traducirPrograma(ctx, parser) {
  let output = '';
  for (const instruccion of ctx.instruccion()) {
    output += traducirInstruccion(instruccion, parser) + '\n';
  }
  return output;
}

function traducirInstruccion(ctx, parser) {
  const seleccion = ctx.seleccion();
  return traducirSeleccion(seleccion, parser);
}

function traducirSeleccion(ctx, parser) {
  const valorExpr = ctx.expresion().getText(); // Usamos el texto original
  let resultado = `switch (${valorExpr}) {\n`;

  for (const casoCtx of ctx.caso()) {
    const valorCaso = casoCtx.constante().getText();
    resultado += `  case ${valorCaso}:\n`;
    for (const sentencia of casoCtx.sentencia()) {
      resultado += '    ' + traducirSentencia(sentencia, parser) + '\n';
    }
    resultado += '    break;\n';
  }

  if (ctx.caso_defecto()) {
    resultado += `  default:\n`;
    for (const sentencia of ctx.caso_defecto().sentencia()) {
      resultado += '    ' + traducirSentencia(sentencia, parser) + '\n';
    }
  }

  resultado += '}\n';
  return resultado;
}

function traducirSentencia(ctx, parser) {
  if (ctx.salida().length > 0) {
    return ctx.salida().map(traducirSalida).join('\n    ');
  } else if (ctx.terminar()) {
    return 'break;';
  }
}

function traducirSalida(ctx) {
  // Aquí usamos el texto original de la cadena, que incluye los espacios
  return `console.log(${ctx.CADENA().getText()});`;
}

module.exports = {
  traducir
};
