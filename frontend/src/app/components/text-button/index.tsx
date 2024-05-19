import { Typography } from "@mui/material";
import Link from "next/link";

interface Props {
  title: string;
  color?: string;
  hoverColor: string;
  id?: string;
  redirectLink?: string;
  type?: string
}

const TextButton = ({
  title,
  color,
  hoverColor,
  id,
  redirectLink,
  type
}: Props): JSX.Element => {
  return (
    <>
      {id ? (
        <a
          href={`#${id}`}
          style={{ textDecoration: 'none', scrollBehavior: "smooth", transition: '0.3s' }}
        >
          <Typography
            sx={{
              color: { xs: "black !important",sm:"black !important",lg:"white !important"},
              fontSize: "16px",
              fontWeight: 500,
              cursor: "pointer",
              transition: "0.3s",
              "&:hover": {
                color: hoverColor,
              },
            }}
          >
            {title}
          </Typography>
        </a>
      ) : redirectLink ? (
        <Link href={redirectLink} passHref>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "16px",
              fontWeight: 500,
              cursor: "pointer",
              transition: "0.3s",
              "&:hover": {
                color: hoverColor,
              },
            }}
            component="span"  // Change to "span" to avoid nesting <a> inside <a>
          >
            {title}
          </Typography>
        </Link>
      ) : null}
    </>
  );
};

export default TextButton;
