const validate = (game, errorsState) => {
    const errors = { ...errorsState };

    if (!game.name) errors.name = "este campo es obligatorio";
    else if (!/^[a-zA-Z0-9]+$/.test(game.name))
    errors.name = "no se admiten simbolos";
    else errors.name = "";
    
    if (!game.description) errors.description = "este campo es obligatorio";
    else if (game.description.length > 255)
    errors.description = "no puede tener mas de 255 caracteres";
    else errors.description = "";
    
    if (!game.released) errors.released = "este campo es obligatorio";
    else if (!/^\d{4}-\d{2}-\d{2}$/.test(game.released))
    errors.released = "la fecha debe seguir el siguiente formato 'YYYY-MM-DD'";
    else errors.released = "";

    if (!game.background_image) errors.background_image = "este campo es obligatorio";
    else if (!/^https?:\/\/(?:[a-z0-9\-]+\.)+[a-z]{2,}(?:\/[^\/]*)*\/[^\/]+\.(?:jpg)$/.test(game.background_image))
    errors.background_image = "debe der una url con formato de imagen";
    else errors.background_image = "";

    if (!game.background_image_additional) errors.background_image_additional = "este campo es obligatorio";
    else if (!/^https?:\/\/(?:[a-z0-9\-]+\.)+[a-z]{2,}(?:\/[^\/]*)*\/[^\/]+\.(?:jpg)$/.test(game.background_image_additional))
    errors.background_image_additional = "debe der una url con formato de imagen";
    else errors.background_image_additional = "";

    if (!game.rating) errors.rating = "este campo es obligatorio";
    else if (game.rating > 5 || game.rating < 0 )
    errors.rating = "el rating no puede ser mayor a 5 o menor a 0";
    else errors.rating = "";
    
   

    return errors;
  };
  export default validate;