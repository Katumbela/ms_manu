import { School } from "@/infra/interfacess";
import { SchoolService } from "@/services";
import search from "../styles/search.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import SchoolComponentSkeleton from "@/components/skeletons/school-skeleton";
import SchoolComponent from "@/components/school_components/school-component";

export default function SearchI() {
  const searchParams = useSearchParams();
  const query = searchParams.get("type");

  const [schools, setSchools] = useState<School[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSchools, setFilteredSchools] = useState<School[]>([]);
  const [loadSchools, setLoadSchools] = useState(true);

  useEffect(() => {
    const fetchSchools = async () => {
      const service = new SchoolService();
      const data = await service.getSchoolsByType(query ? query : "iem");
      setSchools(data);
      setFilteredSchools(data);
      setLoadSchools(false);
    };

    fetchSchools();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = schools.filter((school) =>
      school.schoolName.toLowerCase().includes(term)
    );
    setFilteredSchools(filtered);
  };

  return (
    <>
      <div className={search.container}>
        <Link href="explore" className={search.top}>
          <Image
            className={search.logo}
            src={"/icons/left_arrow.svg"}
            alt="done"
            width={30}
            height={60}
            priority
          />
          <div className={search.title}>
            <p>Instituições de Ensino Superior </p>
          </div>
        </Link>

        <div className={search.input}>
          <div className={search.inputContainer}>
            <div className={search.iconContainer}>
              <Image
                className={search.logo}
                src={"/icons/magn.svg"}
                alt="ba2ck"
                width={25}
                height={35}
                priority
              />
            </div>
            <input
              value={searchTerm}
              onChange={handleSearch}
              type="search"
              placeholder="Pesquisar por curso"
              className={search.input3}
            />
          </div>
        </div>

        <div className={search.filter}>
          <p className={search.purple}>Ordenar por:</p>
          <p>
            {/* {schools.length} resultado{schools.length <= 1 ? "" : "s"} */}
          </p>
        </div>

        <div className={"block w-full container"}>
          {loadSchools ? (
            <>
              <SchoolComponentSkeleton />
            </>
          ) : (
            <>
              {/* {filteredSchools.map((course, i) => (
                <SchoolComponent data={course} index={i} key={i} />
              ))} */}
            </>
          )}
        </div>

        <br />
        <br />
      </div>
    </>
  );
}
