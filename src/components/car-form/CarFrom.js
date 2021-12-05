import { Box, Button, Typography } from "@mui/material";
import { useSelect } from "../../hooks/useSelect";
import { useInput } from "../../hooks/useInput";
import { useGetBrands, useGetModels } from "../../hooks/useCarsData";

export default function CarForm() {
  const [brands] = useGetBrands();
  const [brand, BrandSelect] = useSelect({
    options: brands,
    label: "Brand",
    id: "S1",
  });
  const [models] = useGetModels(brand);
  const [model, ModelSelect] = useSelect({
    options: models,
    label: "Model",
    id: "S2",
    disabled: !brand,
  });
  const [keywords, KeywordsInput] = useInput({
    label: "Keywords",
    id: "T",
  });

  const disabledButton = brand !== "" || model !== "" || keywords !== "";

  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" component="h3">
        Buy a car
      </Typography>

      <form>
        {BrandSelect}
        {ModelSelect}
        {KeywordsInput}
        <Button
          variant="outlined"
          type="submit"
          id="B"
          size="large"
          disabled={!disabledButton}
        >
          Search cars
        </Button>
      </form>
    </Box>
  );
}
